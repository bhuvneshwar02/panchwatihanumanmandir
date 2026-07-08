import content from '../data/content';

export default function Donation() {
  const { heading, paragraphs, bankDetails } = content.donation;
  const hasDetails = bankDetails.accountNumber || bankDetails.upiId;

  return (
    <section id="donate" className="section section--marble donation">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Seva &amp; Support</p>
          <h2>{heading}</h2>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="donation__card">
          {hasDetails ? (
            <dl>
              {bankDetails.accountName && (
                <>
                  <dt>Account Name</dt>
                  <dd>{bankDetails.accountName}</dd>
                </>
              )}
              {bankDetails.accountNumber && (
                <>
                  <dt>Account Number</dt>
                  <dd>{bankDetails.accountNumber}</dd>
                </>
              )}
              {bankDetails.ifsc && (
                <>
                  <dt>IFSC</dt>
                  <dd>{bankDetails.ifsc}</dd>
                </>
              )}
              {bankDetails.bankName && (
                <>
                  <dt>Bank</dt>
                  <dd>{bankDetails.bankName}</dd>
                </>
              )}
              {bankDetails.upiId && (
                <>
                  <dt>UPI ID</dt>
                  <dd>{bankDetails.upiId}</dd>
                </>
              )}
            </dl>
          ) : (
            <p className="donation__placeholder">{bankDetails.note}</p>
          )}

          <a href={`tel:${content.phone.replace(/\s/g, '')}`} className="btn btn-primary">
            Call the Temple Committee
          </a>
        </div>
      </div>
    </section>
  );
}
