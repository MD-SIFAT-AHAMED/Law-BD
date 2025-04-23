import React from 'react';
import { PiNewspaperClipping } from "react-icons/pi";
import { Link } from 'react-router';

const LawyerCard = ({lawyer}) => {

    const {name,id,image,available,licenseNumber,speciality,experience} = lawyer;

    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm p-2 xl:p-4">
            <figure className='mx-auto my-auto w-full md:w-[159px] md:h-[158px]'>
                <img
                src={image}
                className="w-full h-full object-cover"
                alt="Album" />
            </figure>
            <div className="card-body px-2 pr-2 ">
                <div className='flex w-fit space-x-3 xl:space-x-4'>
                    {available ? <p className='px-2 py-1 text-[#09982F] rounded-2xl bg-[#09982F40]'>Available</p> : <p
                    className='px-2 py-1 text-red-600 rounded-2xl bg-[#f2232320]'>Unavailbale</p>}
                    <p className='px-2 py-1 bg-blue-200 rounded-2xl text-blue-800'>{experience} Experience</p>
                </div>
                <h2 className="card-title">{name}</h2>
                <p className='text-base '>{speciality} Expart</p>
                <p className='text-base '><PiNewspaperClipping className='inline mr-2' size={15}/>License No: {licenseNumber}</p>
                <Link to={`/details/${id}`}><button className="btn w-full font-semibold border-1 border-blue-500  text-blue-600 py-1 rounded-2xl hover:bg-blue-600 hover:text-white">View Details</button></Link>
            </div>
            </div>
        </div>
    );
};

export default LawyerCard;