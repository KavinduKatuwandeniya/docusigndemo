import React, { useState } from 'react';

function EnvelopeInfo() {
    const [envelopeId, setEnvelopeId] = useState('');
    const [envelopeData, setEnvelopeData] = useState(null);

    const handleInputChange = (e) => {
        setEnvelopeId(e.target.value);
    };

    const fetchEnvelopeData = async () => {
        try {
            const response = await fetch(`http://localhost:8084/api/get-envelope?envelopeId=${envelopeId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();
            setEnvelopeData(data);
        } catch (error) {
            console.error('Error fetching envelope data:', error);
        }
    };

    return (
        <div>
            <h2>Envelope Info</h2>
            <div>
                <label htmlFor="envelopeId">Envelope ID:</label>
                <input
                    type="text"
                    id="envelopeId"
                    value={envelopeId}
                    onChange={handleInputChange}
                />
                <button onClick={fetchEnvelopeData}>Get Info</button>
            </div>

            {envelopeData && (
                <div>
                    <h3>Envelope Details:</h3>
                    <ul>
                        <li>
                            <strong>Allow Comments:</strong> {envelopeData.allowComments}
                        </li>
                        <li>
                            <strong>Allow Markup:</strong> {envelopeData.allowMarkup}
                        </li>
                        <li>
                            <strong>Allow Reassign:</strong> {envelopeData.allowReassign}
                        </li>
                        <li>
                            <strong>Allow View History:</strong> {envelopeData.allowViewHistory}
                        </li>
                        <li>
                            <strong>Any Signer:</strong> {envelopeData.anySigner}
                        </li>
                        <li>
                            <strong>Asynchronous:</strong> {envelopeData.asynchronous}
                        </li>
                        <li>
                            <strong>Attachments URI:</strong> {envelopeData.attachmentsUri}
                        </li>
                        <li>
                            <strong>Authoritative Copy:</strong> {envelopeData.authoritativeCopy}
                        </li>
                        <li>
                            <strong>Authoritative Copy Default:</strong> {envelopeData.authoritativeCopyDefault}
                        </li>
                        <li>
                            <strong>Auto Navigation:</strong> {envelopeData.autoNavigation}
                        </li>
                        <li>
                            <strong>Brand ID:</strong> {envelopeData.brandId}
                        </li>
                        <li>
                            <strong>Brand Lock:</strong> {envelopeData.brandLock}
                        </li>
                        <li>
                            <strong>Burn Default Tab Data:</strong> {envelopeData.burnDefaultTabData}
                        </li>
                        <li>
                            <strong>Certificate URI:</strong> {envelopeData.certificateUri}
                        </li>
                        <li>
                            <strong>Completed Date Time:</strong> {envelopeData.completedDateTime}
                        </li>
                        <li>
                            <strong>Copy Recipient Data:</strong> {envelopeData.copyRecipientData}
                        </li>
                        <li>
                            <strong>Created Date Time:</strong> {envelopeData.createdDateTime}
                        </li>
                        <li>
                            <strong>Custom Fields:</strong> {envelopeData.customFields}
                        </li>
                        <li>
                            <strong>Custom Fields URI:</strong> {envelopeData.customFieldsUri}
                        </li>
                        <li>
                            <strong>Declined Date Time:</strong> {envelopeData.declinedDateTime}
                        </li>
                        <li>
                            <strong>Deleted Date Time:</strong> {envelopeData.deletedDateTime}
                        </li>
                        <li>
                            <strong>Delivered Date Time:</strong> {envelopeData.deliveredDateTime}
                        </li>
                        <li>
                            <strong>Disable Responsive Document:</strong> {envelopeData.disableResponsiveDocument}
                        </li>
                        <li>
                            <strong>Document Base64:</strong> {envelopeData.documentBase64}
                        </li>
                        <li>
                            <strong>Documents Combined URI:</strong> {envelopeData.documentsCombinedUri}
                        </li>
                        <li>
                            <strong>Documents URI:</strong> {envelopeData.documentsUri}
                        </li>
                        <li>
                            <strong>Email Blurb:</strong> {envelopeData.emailBlurb}
                        </li>
                        <li>
                            <strong>Email Settings:</strong> {envelopeData.emailSettings}
                        </li>
                        <li>
                            <strong>Email Subject:</strong> {envelopeData.emailSubject}
                        </li>
                        <li>
                            <strong>Enable Wet Sign:</strong> {envelopeData.enableWetSign}
                        </li>
                        <li>
                            <strong>Enforce Signer Visibility:</strong> {envelopeData.enforceSignerVisibility}
                        </li>
                        <li>
                            <strong>Envelope Attachments:</strong> {envelopeData.envelopeAttachments}
                        </li>
                        <li>
                            <strong>Envelope Custom Metadata:</strong> {envelopeData.envelopeCustomMetadata}
                        </li>
                        <li>
                            <strong>Envelope Documents:</strong> {envelopeData.envelopeDocuments}
                        </li>
                        <li>
                            <strong>Envelope ID:</strong> {envelopeData.envelopeId}
                        </li>
                        <li>
                            <strong>Envelope ID Stamping:</strong> {envelopeData.envelopeIdStamping}
                        </li>
                        <li>
                            <strong>Envelope Location:</strong> {envelopeData.envelopeLocation}
                        </li>
                        <li>
                            <strong>Expire After:</strong> {envelopeData.expireAfter}
                        </li>
                        <li>
                            <strong>Expire Date Time:</strong> {envelopeData.expireDateTime}
                        </li>
                        <li>
                            <strong>Expire Enabled:</strong> {envelopeData.expireEnabled}
                        </li>
                        <li>
                            <strong>External Envelope ID:</strong> {envelopeData.externalEnvelopeId}
                        </li>
                        <li>
                            <strong>Folders:</strong> {envelopeData.folders}
                        </li>
                        <li>
                            <strong>Has Comments:</strong> {envelopeData.hasComments}
                        </li>
                        <li>
                            <strong>Has Form Data Changed:</strong> {envelopeData.hasFormDataChanged}
                        </li>
                        <li>
                            <strong>Has Wav File:</strong> {envelopeData.hasWavFile}
                        </li>
                        <li>
                            <strong>Holder:</strong> {envelopeData.holder}
                        </li>
                        <li>
                            <strong>Initial Sent Date Time:</strong> {envelopeData.initialSentDateTime}
                        </li>
                        <li>
                            <strong>is21CFRPart11:</strong> {envelopeData.is21CFRPart11}
                        </li>
                        <li>
                            <strong>isDynamicEnvelope:</strong> {envelopeData.isDynamicEnvelope}
                        </li>
                        <li>
                            <strong>isSignatureProviderEnvelope:</strong> {envelopeData.isSignatureProviderEnvelope}
                        </li>
                        <li>
                            <strong>Last Modified Date Time:</strong> {envelopeData.lastModifiedDateTime}
                        </li>
                        <li>
                            <strong>Location:</strong> {envelopeData.location}
                        </li>
                        <li>
                            <strong>Lock Information:</strong> {envelopeData.lockInformation}
                        </li>
                        <li>
                            <strong>Message Lock:</strong> {envelopeData.messageLock}
                        </li>
                        <li>
                            <strong>Notification:</strong> {envelopeData.notification}
                        </li>
                        <li>
                            <strong>Notification URI:</strong> {envelopeData.notificationUri}
                        </li>
                        <li>
                            <strong>Power Form:</strong> {envelopeData.powerForm}
                        </li>
                        <li>
                            <strong>Purge Completed Date:</strong> {envelopeData.purgeCompletedDate}
                        </li>
                        <li>
                            <strong>Purge Request Date:</strong> {envelopeData.purgeRequestDate}
                        </li>
                        <li>
                            <strong>Purge State:</strong> {envelopeData.purgeState}
                        </li>
                        <li>
                            <strong>Recipients:</strong> {envelopeData.recipients}
                        </li>
                        <li>
                            <strong>Recipients Lock:</strong> {envelopeData.recipientsLock}
                        </li>
                        <li>
                            <strong>Recipients URI:</strong> {envelopeData.recipientsUri}
                        </li>
                        <li>
                            <strong>Sender Account ID:</strong> {envelopeData.sender.accountId}
                        </li>
                        <li>
                            <strong>Sender Email:</strong> {envelopeData.sender.email}
                        </li>
                        <li>
                            <strong>Sender IP Address:</strong> {envelopeData.sender.ipAddress}
                        </li>
                        <li>
                            <strong>Sender User ID:</strong> {envelopeData.sender.userId}
                        </li>
                        <li>
                            <strong>Sender User Name:</strong> {envelopeData.sender.userName}
                        </li>
                        <li>
                            <strong>Sent Date Time:</strong> {envelopeData.sentDateTime}
                        </li>
                        <li>
                            <strong>Signer Can Sign On Mobile:</strong> {envelopeData.signerCanSignOnMobile}
                        </li>
                        <li>
                            <strong>Signing Location:</strong> {envelopeData.signingLocation}
                        </li>
                        <li>
                            <strong>Status:</strong> {envelopeData.status}
                        </li>
                        <li>
                            <strong>Status Changed Date Time:</strong> {envelopeData.statusChangedDateTime}
                        </li>
                        <li>
                            <strong>Status Date Time:</strong> {envelopeData.statusDateTime}
                        </li>
                        <li>
                            <strong>Templates URI:</strong> {envelopeData.templatesUri}
                        </li>
                        <li>
                            <strong>Transaction ID:</strong> {envelopeData.transactionId}
                        </li>
                        <li>
                            <strong>Use Disclosure:</strong> {envelopeData.useDisclosure}
                        </li>
                        <li>
                            <strong>Voided Date Time:</strong> {envelopeData.voidedDateTime}
                        </li>
                        <li>
                            <strong>Voided Reason:</strong> {envelopeData.voidedReason}
                        </li>
                        <li>
                            <strong>Workflow:</strong> {envelopeData.workflow}
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default EnvelopeInfo;
