import React, { useState } from 'react';

function DownloadDocuments() {
    const [envelopeId, setEnvelopeId] = useState('');
    const [documentId, setDocumentId] = useState('');

    const handleEnvelopeIdChange = (e) => {
        setEnvelopeId(e.target.value);
    };

    const handleDocumentIdChange = (e) => {
        setDocumentId(e.target.value);
    };

    const handleDownload = () => {
        // Construct the API URL with envelopeId and documentId
        const apiUrl = `http://localhost:8084/api/download-signed-document?envelopeId=${envelopeId}&documentId=${documentId}`;

        // Trigger the document download
        fetch(apiUrl, {
            method: 'POST', // Assuming the API uses GET for downloading
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create a URL for the blob data
                const url = window.URL.createObjectURL(blob);

                // Create an invisible anchor element to trigger the download
                const a = document.createElement('a');
                a.href = url;
                a.download = `document-${documentId}.pdf`; // Specify the desired filename
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error('Error downloading document:', error);
            });
    };

    return (
        <div>
            <h2>Download Documents</h2>
            <div>
                <label htmlFor="envelopeId">Envelope ID:</label>
                <input
                    type="text"
                    id="envelopeId"
                    value={envelopeId}
                    onChange={handleEnvelopeIdChange}
                />
            </div>
            <div>
                <label htmlFor="documentId">Document ID:</label>
                <input
                    type="text"
                    id="documentId"
                    value={documentId}
                    onChange={handleDocumentIdChange}
                />
            </div>
            <button onClick={handleDownload}>Download Document</button>
        </div>
    );
}

export default DownloadDocuments;
