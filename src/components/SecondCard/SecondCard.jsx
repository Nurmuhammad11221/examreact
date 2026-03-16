const blogData = [
  {
    id: 1,
    title: "Cactus & Succulent Care Tips",
    description: "Cacti are succulents are easy care plants for any home or patio.",
    image: "/SecondCard1.png"
  },
  {
    id: 2,
    title: "Top 10 Succulents for Your Home",
    description: "Best in hanging baskets. Prefers medium to high light.",
    image: "/SecondCard2.png"
  },
  {
    id: 3,
    title: "Cacti & Succulent Care Tips",
    description: "Cacti and succulents thrive in containers and because most are..",
    image: "/SecondCard3.png"
  },
  {
    id: 4,
    title: "Best Houseplants Room By Room",
    description: "The benefits of houseplants are endless. In addition to..",
    image: "/SecondCard4.png"
  }
];

const SecondCard = () => {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Our Blog Posts</h2>
        <p className="text-muted small">
          We are an online plant shop offering a wide range of cheap and trendy plants.
        </p>
      </div>

      <div className="row g-4">
        {blogData.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm" style={{ backgroundColor: '#fbfbfb' }}>
              <img src={item.image} className="card-img-top" alt={item.title}
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body px-3">
                <h6 className="card-title fw-bold mb-2" style={{ fontSize: '1.1rem' }}>
                  {item.title}
                </h6>
                <p className="card-text text-muted small mb-3">
                  {item.description}
                </p>
                <a href="#" className="text-decoration-none text-success fw-bold small d-flex align-items-center">
                  Read More <span className="ms-2">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SecondCard;