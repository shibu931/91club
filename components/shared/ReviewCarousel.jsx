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
import Link from "next/link"

const ReviewCarousel = ({ reviews }) => {
    return (
        <Carousel className="w-full">
            <CarouselContent className="-ml-1">
                {reviews.map((item, index) => (
                    <CarouselItem key={index} className="lg:pl-4 lg:basis-1/2">
                        <div className="border border-red-200 bg-red-500 p-4 lg:p-10 rounded-xl h-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 text-white lg:gap-10 gap-2 lg:gap-5">
                                <Image
                                    src={item.img}
                                    width={320}
                                    height={380}
                                    className="rounded-md border-white border-4 shadow-sm"
                                />
                                <div>
                                    <p className="text-lg mb-6">{item.content}</p>
                                    <p className="font-semibold text-xl">-{item.name}</p>
                                    <div className="mx-auto mt-10">
                                    <Link href="https://91in04.com/#/register?invitationCode=814585940557" className='cta-btn px-6 font-semibold py-2 animated-border bg-blue-500 text-white rounded-md my-auto me-2'>Register Now</Link>
                                    <Link href="https://91in04.com/#/register?invitationCode=814585940557" className='cta-btn px-6 font-semibold py-2 animated-border bg-green-500 text-white rounded-md my-auto me-2'>Login</Link>
                                </div>
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