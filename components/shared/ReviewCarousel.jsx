"use client"
import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const ReviewCarousel = ({ reviews }) => {
    return (
        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {reviews.map((item, index) => (
                    <CarouselItem key={index} className="pl-4 lg:basis-1/2">
                        <div className="border border-red-500 bg-red-100 p-4 lg:p-10 rounded-xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-10 gap-5">
                                <Image
                                    src={item.img}
                                    width={320}
                                    height={380}
                                    className="rounded-md border border-red-600 shadow-sm"
                                />
                                <div>
                                    <p className="text-lg mb-6">{item.content}</p>
                                    <p className="font-semibold text-xl">-{item.name}</p>
                                </div>
                            </div>

                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default ReviewCarousel