import React, { useState } from "react";
import axios from "axios";
import DocumentWindow from "../DocumentWindow/DocumentWindow";

function Form() {
    const [recipientViewUrl, setRecipientViewUrl] = useState('');
    const [envelopeId, setEnvelopeId] = useState('');
    const [isVisible, setIsVisible] = useState(false);


    const initiateSigning = async () => {
        const signerNameInput = document.getElementById('signerNameInput');
        const ccEmailInput = document.getElementById('ccEmailInput');
        const ccNameInput = document.getElementById('ccNameInput');

        const signerName = signerNameInput.value;
        const ccEmail = ccEmailInput.value;
        const ccName = ccNameInput.value;

        const signerDetails = {
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
            <h1>Embedded Signing</h1>
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