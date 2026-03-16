const MiniCard2 = () => {
    const MiniCardd = [
        {
            id: 1,
            title: "SUMMER CACTUS\n& SUCCULENTS", 
            description: "We are an online plant shop offering a wide range of cheap and trendy plants.",
            image: "/MiniCard5.png"
        },
        {
            id: 2,
            title: "STYLING TRENDS\n& MUCH MORE",
            description: "We are an online plant shop offering a wide range of cheap and trendy plants.",
            image: "/MiniCard6.png" 
        }
    ];
    return (
        <section className="py-4 py-lg-5">
            <div className="container">
                <div className="row g-4 flex-wrap">
                    {MiniCardd.map((card) => (
                        <div key={card.id} className="col-12 col-md-6">
                            <div
                                className="bg-light rounded-4 p-4 d-flex align-items-center position-relative overflow-hidden h-100"
                                style={{ minHeight: '240px' }}
                            >
                                <div className="flex-shrink-0" style={{ width: '40%' }}>
                                    <img src={card.image} className="img-fluid"
                                        style={{
                                            maxHeight: "100%",
                                            maxWidth: "100%",
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>

                                <div className="flex-grow-1 ps-4 text-end">
                                    <h3
                                        className="fw-bold mb-2 text-uppercase text-dark"
                                        style={{
                                            fontSize: 'calc(1.1rem + 0.3vw)',
                                            whiteSpace: 'pre-line', 
                                            lineHeight: '1.2'
                                        }}
                                    >
                                        {card.title}
                                    </h3>

                                    <p
                                        className="text-muted mb-3 d-none d-sm-block text-justify text-end"
                                        
                                    >
                                        {card.description}
                                    </p>

                                    <button
                                        className="btn btn-success d-inline-flex align-items-center justify-content-center px-3 py-1 px-lg-4 py-lg-2 fw-bold"
                                        style={{ fontSize: 'calc(0.7rem + 0.2vw)', borderRadius: '8px' }}
                                    >
                                        Find More <span className="ms-2">→</span>
                                    </button>
                                </div>

    
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default MiniCard2;
