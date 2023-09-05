import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import RemoteSigning from "../RemoteSigning/RemoteSigning";
import EmbeddedSigning from "../EmbeddedSigning/EmbeddedSigning";
// import WebEmbeddedSigning from "../WebEmbeddedSigning/WebEmbeddedSigning";
import EnvelopeInfo from "../EnvelopeInfo/EnvelopeInfo";
import DownloadDocument from "../DownloadDocument/DownloadDocument";

function Home() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/remote-signing">Remote Signing</Link>
                        </li>
                        <li>
                            <Link to="/embedded-signing">Embedded Signing</Link>
                        </li>
                        {/*<li>*/}
                        {/*    /!*<Link to="/web-embedded-signing">Web Embedded Signing</Link>*!/*/}
                        {/*</li>*/}
                        <li>
                            <Link to="/envelope-info">Get Envelope Info</Link>
                        </li>
                        <li>
                            <Link to="/download-signed-document">Download Document</Link>
                        </li>
                    </ul>
                </nav>

                <hr/>
                <Routes>
                    <Route path="/remote-signing" element={<RemoteSigning />} />
                    <Route path="/embedded-signing" element={<EmbeddedSigning />} />
                    {/*<Route path="/web-embedded-signing" element={<WebEmbeddedSigning />} />*/}
                    <Route path="/envelope-info" element={<EnvelopeInfo />} />
                    <Route path="/download-signed-document" element={<DownloadDocument />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Home;