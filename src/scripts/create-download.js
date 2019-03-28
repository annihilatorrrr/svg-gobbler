import { svgo } from './svgo'
import FileSaver from 'file-saver'

//////////////////
// Export the SVG for download
export const createDownload = svg => {
  svgo.optimize(svg.source).then(function(result) {
    let blob = new Blob([result.data], { type: 'text/xml' })
    FileSaver.saveAs(blob, `${svg.filename}.svg`)
  })
}