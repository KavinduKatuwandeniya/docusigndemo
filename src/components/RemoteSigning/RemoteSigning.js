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
            const response = await axios.post(`http://localhost:8084/api/sign`, signerDetails);
            console.log(response);
            setEnvelopeId(response.data);
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
            <button onClick={initiateSigning}>Remote Signing</button>
            {envelopeId && <p>Envelope Id = {envelopeId}</p>}
        </div>
    );
}

export default Form;