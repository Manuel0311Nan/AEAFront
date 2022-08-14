import React from 'react'
import Detail from './Detail/Detail'
import { Link } from 'react-router-dom';
const Terminales = () => {
  const terminales = [
    {
      id: 1,
      name: 'WFS terminal 1',
      logo:"https://res.cloudinary.com/manuelcodex/image/upload/v1660318155/terminales/wfs_efplk2.png",
      doc: [
        "Recogida: efergjpejogihjerogjeogijeorigjeorjgoerjgiejro",
        "Entrega: ohnjiofisfjoijfoifiovhuieduvheifuheitughotugpeg",
      ],
      entrada: "Dentro y Fuera",
      image: "https://res.cloudinary.com/manuelcodex/image/upload/v1660150842/terminales/wfs1_b1e6hr.png",
    }, {
      id: 2,
      name: 'WFS terminal 2',
      logo: "https://res.cloudinary.com/manuelcodex/image/upload/v1660318155/terminales/wfs_efplk2.png",
      doc: [
        "Recogida: efergjpejogihjerogjeogijeorigjeorjgoerjgiejro",
        "Entrega: ohnjiofisfjoijfoifiovhuieduvheifuheitughotugpeg",
      ],
      entrada: "Dentro y Fuera",
      image: "https://res.cloudinary.com/manuelcodex/image/upload/v1660150842/terminales/wfs2_dnyp88.png",
    }, {
      id: 3,
      name: 'WFS terminal 3',
      logo: "https://res.cloudinary.com/manuelcodex/image/upload/v1660318155/terminales/wfs_efplk2.png",
      doc: [
        "Recogida: efergjpejogihjerogjeogijeorigjeorjgoerjgiejro",
        "Entrega: ohnjiofisfjoijfoifiovhuieduvheifuheitughotugpeg",
      ],
      entrada: "Fuera",
      image: "https://res.cloudinary.com/manuelcodex/image/upload/v1660150842/terminales/wfs3_gpu6fn.png",
    }, {
      id: 4,
      name: 'DHL nuevo',
      logo: "https://res.cloudinary.com/manuelcodex/image/upload/v1660318155/terminales/dhl_iriv0l.png",
      doc: [
        "Recogida: efergjpejogihjerogjeogijeorigjeorjgoerjgiejro",
        "Entrega: ohnjiofisfjoijfoifiovhuieduvheifuheitughotugpeg",
      ],
      entrada: "Fuera",
      image: "https://res.cloudinary.com/manuelcodex/image/upload/v1660151108/terminales/dhl_nuevo_bmcpbn.png",
    }, {
      id: 5,
      name: 'DHL antiguo',
      logo: "https://res.cloudinary.com/manuelcodex/image/upload/v1660318155/terminales/dhl_iriv0l.png",
      doc: [
        "Recogida: efergjpejogihjerogjeogijeorigjeorjgoerjgiejro",
        "Entrega: ohnjiofisfjoijfoifiovhuieduvheifuheitughotugpeg",
      ],
      entrada: "Fuera",
      image: "https://res.cloudinary.com/manuelcodex/image/upload/v1660150842/terminales/dhlantiguo_epnxqy.png",
    },
    {
      id: 6,
      name: 'IAG cargo', 
      logo: "https://res.cloudinary.com/manuelcodex/image/upload/v1660318155/terminales/iag_xpz45x.png",
      doc: [
        "Recogida: efergjpejogihjerogjeogijeorigjeorjgoerjgiejro",
        "Entrega: ohnjiofisfjoijfoifiovhuieduvheifuheitughotugpeg",
      ],
      entrada: "Fuera",
      image: "https://res.cloudinary.com/manuelcodex/image/upload/v1660150844/terminales/iagCargo_hjwktb.png",
    }
    ,    {
      id: 7,
      name: 'Swissport',
      logo: "https://res.cloudinary.com/manuelcodex/image/upload/v1660318155/terminales/SWISPORT_hekvbf.jpg",
      doc: [
        "Recogida: efergjpejogihjerogjeogijeorigjeorjgoerjgiejro",
        "Entrega: ohnjiofisfjoijfoifiovhuieduvheifuheitughotugpeg",
      ],
      entrada: "Dentro y Fuera",
      image: "https://res.cloudinary.com/manuelcodex/image/upload/v1660150842/terminales/swissport_pllsin.png",
    }, 
    {
      id: 8,
      name: 'ACL', 
      logo: "https://res.cloudinary.com/manuelcodex/image/upload/v1660318155/terminales/ACL_mxaoas.jpg",
      doc: [
        "Recogida: efergjpejogihjerogjeogijeorigjeorjgoerjgiejro",
        "Entrega: ohnjiofisfjoijfoifiovhuieduvheifuheitughotugpeg",
      ],
      entrada: "Dentro y Fuera",
      image: "https://res.cloudinary.com/manuelcodex/image/upload/v1660318408/terminales/acl_lyinn5.png",
    }
  ]
  return (
    <main>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Terminales</h1>
            <p class="lead text-muted">
              Aquí encontrareis las terminales a las que diariamente debemos ir para
              hacer tanto entregas, recogidas o consultas
            </p>
          </div>
        </div>
      </section>
      <div class=" container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 ">
          {terminales.map((detail) => {
            return (
              <Detail
                 id={detail.id}
                logo={detail.logo}
                name={detail.name}
                entrada={detail.entrada}
                image={detail.image}
                
              />
              
            );
          })}
        </div>
      </div>
    </main>
  )
};

export default Terminales