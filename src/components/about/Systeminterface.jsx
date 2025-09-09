import React from 'react';

const Systeminterface = () => {
    return (
        <section id="system-diagram" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-primary mb-12 text-center">
                    Giao diện hệ thống
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
                        <div className="relative group rounded-xl">
                            <img
                                src="img/GDEVNICT.png"
                                alt="System Interface 1"
                                className="bg-white  rounded-2xl shadow-lg p-2 pb-5 pt-5 flex flex-col items-center w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-125"
                            />
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap shadow-md">
                                Giao diện EVNICT kết nối lấy dữ liệu trực tiếp từ Hino Gateway
                            </div>
                        </div>
                        <p className="text-center text-base text-gray-700 mt-6">
                            Giao diện EVNICT kết nối lấy dữ liệu trực tiếp từ Hino Gateway
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
                        <div className="relative group rounded-xl">
                            <img
                                src="img/GDGateway.png"
                                alt="System Interface 2"
                                className="bg-white rounded-2xl shadow-lg p-2 flex flex-col items-center w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-125"
                            />
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs rounded px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap shadow-md">
                                Giao hiện của Hino Gateway 378
                            </div>
                        </div>
                        <p className="text-center text-base text-gray-700 mt-6">
                            Giao hiện của Hino Gateway 378
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Systeminterface;
