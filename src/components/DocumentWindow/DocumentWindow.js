// import React from "react";
//
// function DocumentWindow({ embeddedUrl }) {
//     return (
//         <div>
//             <h1>Document View</h1>
//             <iframe src={embeddedUrl} title="Document Signing Ceremony" width="100%" height={480}/>
//         </div>
//     );
// }
//
// export default DocumentWindow;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DocumentWindow({ envelopeId , signUrl }) {
    return (
        <div>
            {signUrl && (
                <object data={signUrl} type="text/html" width="100%" height="800">
                    <p>Unable to display signing ceremony.</p>
                </object>
            )}
        </div>
    );
}

export default DocumentWindow;
