import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export interface NoteToExport {
  documentId: string;
  title: string;
  author: string;
  category: string;
  content: string;
  citation: string;
  lastUpdated: string;
}

export async function exportNotesToPdf(notes: NoteToExport[], filename?: string): Promise<void> {
  if (!notes || notes.length === 0) return;

  const defaultFilename = notes.length === 1 
    ? `${notes[0].title.replace(/[^a-zA-Z0-9]/g, '_').substring(0, 30)}_Note.pdf`
    : `Dar_al_Wahi_Notes_${new Date().toISOString().split('T')[0]}.pdf`;

  const outputName = filename || defaultFilename;

  // Create an off-screen container with crisp printable dimensions
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '800px';
  container.style.padding = '48px';
  container.style.backgroundColor = '#ffffff';
  container.style.color = '#0f172a';
  container.style.fontFamily = 'serif';
  container.style.zIndex = '-9999';

  const notesHtml = notes.map((note, index) => `
    <div style="border: 1px solid #cbd5e1; border-radius: 8px; padding: 24px; margin-bottom: 24px; background: #ffffff; page-break-inside: avoid;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
        <span style="font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; color: #b91c1c;">
          ${note.category || 'General'}
        </span>
        <span style="font-size: 11px; color: #64748b;">
          ${new Date(note.lastUpdated).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </span>
      </div>
      
      <h2 style="font-size: 20px; font-weight: bold; margin: 0 0 4px 0; color: #0f172a; line-height: 1.3;">
        ${note.title}
      </h2>
      <p style="font-size: 13px; color: #475569; margin: 0 0 16px 0; font-style: italic;">
        By ${note.author}
      </p>

      <div class="pdf-rich-text" style="font-size: 14px; line-height: 1.7; color: #1e293b; margin-bottom: 20px;">
        ${note.content}
      </div>

      <div style="border-top: 1px dashed #cbd5e1; padding-top: 10px; font-size: 11px; color: #64748b; font-style: italic;">
        Reference: ${note.citation || 'Dar al-Wahi Library'}
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div style="border-bottom: 2px solid #0f172a; padding-bottom: 16px; margin-bottom: 28px;">
      <div style="display: flex; justify-content: space-between; align-items: flex-end;">
        <div>
          <h1 style="font-size: 26px; font-weight: bold; margin: 0 0 4px 0; color: #0f172a;">
            Dār al-Waḥī Library
          </h1>
          <p style="font-size: 13px; color: #475569; margin: 0;">
            Student Notes Compilation • ${notes.length} ${notes.length === 1 ? 'Note' : 'Notes'} Selected
          </p>
        </div>
        <div style="text-align: right; font-size: 11px; color: #64748b;">
          ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>

    <div>
      ${notesHtml}
    </div>

    <div style="margin-top: 36px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 12px;">
      Knowledge Preserved • Dār al-Waḥī Digital Archive
    </div>

    <style>
      .pdf-rich-text ul {
        list-style-type: disc !important;
        padding-left: 28px !important;
        margin: 10px 0 !important;
      }
      .pdf-rich-text ol {
        list-style-type: decimal !important;
        padding-left: 28px !important;
        margin: 10px 0 !important;
      }
      .pdf-rich-text li {
        display: list-item !important;
        margin-bottom: 6px !important;
      }
      .pdf-rich-text p {
        margin-bottom: 10px !important;
      }
      .pdf-rich-text strong, .pdf-rich-text b {
        font-weight: 700 !important;
      }
      .pdf-rich-text em, .pdf-rich-text i {
        font-style: italic !important;
      }
      .pdf-rich-text u {
        text-decoration: underline !important;
      }
    </style>
  `;

  document.body.appendChild(container);

  try {
    const canvas = await html2canvas(container, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    const imgData = canvas.toDataURL('image/jpeg', 0.95);

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(outputName);
  } catch (err) {
    console.error('HTML2Canvas/jsPDF export error, falling back to window print', err);
    // Fallback printable view in case canvas fails
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${outputName}</title>
            <style>
              body { font-family: Georgia, serif; padding: 40px; color: #111; }
              ul { list-style-type: disc !important; padding-left: 24px !important; }
              ol { list-style-type: decimal !important; padding-left: 24px !important; }
              li { display: list-item !important; margin-bottom: 4px !important; }
            </style>
          </head>
          <body>
            ${container.innerHTML}
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    }
  } finally {
    if (document.body.contains(container)) {
      document.body.removeChild(container);
    }
  }
}
