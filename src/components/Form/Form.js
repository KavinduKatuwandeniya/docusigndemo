import React, { useState } from "react";
import axios from "axios";
import DocumentWindow from "../DocumentWindow/DocumentWindow";

function Form() {
    const [recipientViewUrl, setRecipientViewUrl] = useState('');
    const [envelopeId, setEnvelopeId] = useState('');
    const [isVisible, setIsVisible] = useState(false);


    const initiateSigning = async () => {
        const signerEmailInput = document.getElementById('signerEmailInput');
        const signerNameInput = document.getElementById('signerNameInput');
        const ccEmailInput = document.getElementById('ccEmailInput');
        const ccNameInput = document.getElementById('ccNameInput');

        const signerEmail = signerEmailInput.value;
        const signerName = signerNameInput.value;
        const ccEmail = ccEmailInput.value;
        const ccName = ccNameInput.value;

        const signerDetails = {
            "signerEmail": signerEmail,
            "signerName": signerName,
            "ccEmail": ccEmail,
            "ccName": ccName
        };

        try {
            const response = await axios.post(`http://localhost:8084/api/embedded-sign`, signerDetails);
            console.log(response);
            setRecipientViewUrl(response.data);
            setIsVisible(true)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Initiate Signing</h1>
            <input
                type="text"
                id="signerEmailInput"
                placeholder="Enter signer email"
            /><br/>
            <input
                type="text"
                id="signerNameInput"
                placeholder="Enter signer name"
            /><br/>
            <input
                type="text"
                id="ccEmailInput"
                placeholder="Enter cc email"
            /><br/>
            <input
                type="text"
                id="ccNameInput"
                placeholder="Enter cc name"
            /><br/>
            <button onClick={initiateSigning}>Initiate Signing</button>
            {isVisible && <DocumentWindow envelopeId={envelopeId}  signUrl={recipientViewUrl}/>}
        </div>
    );
}

export default Form;



// import React, { useState } from "react";
// import axios from "axios";
// import DocumentWindow from "../DocumentWindow/DocumentWindow";
//
// function From() {
//     const [recipientViewUrl, setRecipientViewUrl] = useState('');
//     const [envelopeId, setEnvelopeId] = useState(''); // Add state for envelopeId
//
//     const initiateSigning = async () => {
//         try {
//             const response = await axios.post(`http://localhost:8084/api/embedded-sign?envelopeId=${envelopeId}`);
//             console.log(response);
//             setRecipientViewUrl(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     };
//
//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Enter Envelope ID"
//                 value={envelopeId}
//                 onChange={(e) => setEnvelopeId(e.target.value)}
//             />
//             <button onClick={initiateSigning}>Initiate Signing</button>
//             {recipientViewUrl && (
//                 <iframe src={recipientViewUrl} width="800" height="600" title="DocuSign Signer View"></iframe>
//             )}
//         </div>
//     );
// }

// export default From;


//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';
// import DocumentWindow from "../DocumentWindow/DocumentWindow";
//
// function Form() {
//     const [envelopeId, setEnvelopeId] = useState('');
//
//     const handleFormSubmit = (event) => {
//         event.preventDefault();
//         // Pass envelopeId to DocumentWindow component
//         // You can also perform validation before passing the ID
//         // For example, check if envelopeId is not empty
//         // You might also want to show error messages if validation fails
//     };
//
//     return (
//         <div>
//             <form onSubmit={handleFormSubmit}>
//                 <label>
//                     Enter Envelope ID:
//                     <input
//                         type="text"
//                         value={envelopeId}
//                         onChange={(e) => setEnvelopeId(e.target.value)}
//                     />
//                 </label>
//                 <button type="submit">Load Document</button>
//             </form>
//             <DocumentWindow envelopeId={envelopeId} />
//         </div>
//     );
// }
//
// export default Form;
