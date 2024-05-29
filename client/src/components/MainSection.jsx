import React, { useState } from 'react';
import { Carousel } from 'flowbite-react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Supposons que vous avez déjà un composant Modal

import banner1 from "../assets/House searching-pana.png";
import banner3 from "../assets/Realtor-bro.png";
import banner2 from "../assets/Realtor-pana.png";

const MainSection = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner1} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                                Bienvenue sur Darkoum, 
                                <h2> </h2>
                                <span className='text-brandPrimary leading-snug'>
                                Votre compagnon pour trouver facilement votre futur chez vous en un seul clic.
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8 '>
                            Darkoum propose une multitude d'annonces de biens immobiliers, notamment à Tizi Ouzou.Notre plateforme vous offre un large éventail de choix. Rejoignez-nous dans cette aventure et trouvez le logement idéal en quelques clics. 
                            </p>
                            <button className='btn-primary' onClick={openModal}>
                                Se connecter
                            </button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner2} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                                Découvrez votre futur chez vous avec des visites virtuelles immersives sur Darkoum.
                                <span className='text-brandPrimary leading-snug'>
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8 '>
                            Parcourez chaque pièce, observez les détails et imaginez-vous y vivre, le tout depuis le confort de votre canapé. Notre technologie de pointe vous offre une vision réaliste des biens immobiliers disponibles, vous permettant ainsi de prendre des décisions éclairées sans avoir à vous déplacer physiquement
                            </p>
                            <button className='btn-primary' onClick={openModal}>
                                Se connecter
                            </button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={banner3} alt="" />
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-4xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                                Votre maison de rêve à portée de clic !
                                <span className='text-brandPrimary leading-snug'>
                                </span>
                            </h1>
                            <p className='text-neutralGrey text-base mb-8 '>
                            Louez ou achetez la maison parfaite sans tracas et économisez votre temps et votre énergie,explorez chaque coin de votre future demeure.
                            Trouvez facilement votre bien idéal avec nous.
                            </p>
                            <button className='btn-primary' onClick={openModal}>
                                Se connecter
                            </button>
                        </div>
                    </div>
                </Carousel>
            </div>
            {/* Modal */}
            {showModal && (
                <Modal onClose={closeModal} backgroundColor="#F27438">
                    <h2 style={{ color: 'white' }}>Se connecter en tant qu'admin ou utilisateur</h2>
                    {/* Ajoutez ici les éléments que vous souhaitez afficher dans votre modal */}
                </Modal>
            )}
        </div>
    )
}

export default MainSection;
