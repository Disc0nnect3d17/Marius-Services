import { services } from '@/data/services'

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card fade-in-up" data-aos="fade-up" key={index}>
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
