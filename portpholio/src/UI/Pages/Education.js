    import React from 'react';
    import './Education.css'; // Import the CSS file

    export default function Education() {

        return (
            <div className="education-me-container container my-5">

                <div className="row text-center">
                    <div className="col-12 col-md-6 py-2">
                        <div className='fs-5 py-2 text-danger'>
                            Course
                        </div>
                    </div>
                    <div className="col-12 col-md-6 py-2">
                        <div className='fs-5  py-2 text-danger'>
                            University
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="education-box p-3">
                            <h5 className='bg-transparent'>Tops Technologies, Surat</h5><br />
                            <p className='bg-transparent'>(FrontEnd Development Course) 2023-2024</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                        <div className="education-box p-3">
                            <h5 className='bg-transparent'>Institute Of Management & Research Development, Shahada</h5><br />
                            <p className='bg-transparent'>BCA (Bachelor of Computer Applications) 2019-2022</p>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-12 col-md-6 py-2">
                        <div className='fs-5  py-2 text-center text-danger'>
                            Secondary School Education
                        </div>

                    </div>
                    <div className="col-12 col-md-6 py-2">
                        <div className='fs-5 py-2 text-danger text-center' >
                            Higher School Education
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div className="col-12 col-md-6 mb-4">
                        <div className="education-box p-3">
                            <h5 className='bg-transparent'>Vasantrao Naik High School, Mahalaxmi Nagar, Shahada</h5><br />
                            <p className='bg-transparent'>2017-2019</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-4 ">
                        <div className="education-box p-3">
                            <h5 className='bg-transparent'>Sheth V. K. Shah Vidya Mandir, Shahada</h5><br />
                            <p className='bg-transparent'>2017</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
