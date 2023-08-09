import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import '../App.css';

function MyFarm({ flowers }){
    // const trial = flowers.map(flower=>(<img src={flower.default_image_url} alt="flower" />))} 

    return(
        <div>
           <div className="bg-rose-100">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                 <h2 className="text-2xl font-bold tracking-tight text-gray-900">These are the flowers in My Farm</h2>
  
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" >
                 {flowers.map((flower) => (
                    <div key={flower.id} className="group relative">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-80 lg:h-80">
                            <img src={flower.default_image_url} alt={flower.common_name} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-xl text-left font-bold">
                                    {flower.common_name}
                                </h3>
                                <p className="mt-1 text-base text-left text-gray-800">{flower.bloom}</p>
                            </div>
                            <div className="text-base font-medium text-gray-900">
                                <FontAwesomeIcon icon={faPlus} size="xl" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>
    )
}

export default MyFarm;

