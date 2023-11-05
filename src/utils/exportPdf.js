import JsPDF from 'jspdf'
import html2canvas from 'html2canvas'

export default async function getPdf(name, dom) {
  const pdf = new JsPDF(undefined, 'pt', 'a4')

  const pdfHeight = 841

  //
  const canvas = await html2canvas(dom, {
    background: '#FFF',
    scale: 2,
    dpi: 300,
  })
  const imgWidth = canvas.width,
    imgHeight = canvas.height
  const pdfImg = canvas.toDataURL('image/jpeg', 1.0)
  // a4纸的尺寸 [595.28,841.89]
  const contentWidth = 595 // 图片宽度 左右留白30 减去60
  // 535/? = imgWidth/imgHeight
  const contentHeight = (595 * imgHeight) / imgWidth

  if (contentHeight > pdfHeight) {
    // pdf.addPage()
    const img = dom.querySelector('img')
    // 第三，四个参数是图片偏移位置，第五六个参数是生成的图片的宽高
    pdf.addImage(img, 'JPEG', 0, 0, 0, 0)
  }
  pdf.addImage(pdfImg, 'JPEG', 0, 0, contentWidth, contentHeight)

  pdf.save(name + '.pdf')
}
