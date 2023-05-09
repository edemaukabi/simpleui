import React from "react";

export const Partners = ({partners}) => {
    return (
        <section className="partners-section">
            <p>Trusted by</p>
            <div className="partners-container">
                {partners.map((partner) => {
                    const {id, logo, name} = partner;
                    return (
                        <div key={id} className="partner">
                            <img src={logo} alt={name} />
                        </div>
                    );
                }
                )}
            </div>
        </section>
    );
};
