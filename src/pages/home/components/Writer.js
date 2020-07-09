import React, { PureComponent } from "react";
import { WriterWrapper, Download, DownloadInfo } from "../style";

class Writer extends PureComponent {
  render() {
    return (
      <div>
        <WriterWrapper>
          <Download>
            <img
              className="pic"
              src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png"
              alt="Download index side qrcode"
            />
            <DownloadInfo>
              <h3 className="title">下载简书手机App &gt;</h3>
              <p className="words">随时随地发现和创作内容</p>
            </DownloadInfo>
          </Download>
        </WriterWrapper>
      </div>
    );
  }
}

export default Writer;
