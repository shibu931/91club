import ReviewCarousel from "@/components/shared/ReviewCarousel";
import Image from "next/image";
import Link from "next/link";

const usp = [
  {
    title: "Variety of Games",
    content: "Play a variety of games, such as Aviator and Color Prediction, to ensure that there's always something new to discover and take pleasure in."
  },
  {
    title: "Real-Time incentives",
    content: "As you play, get monetary incentives that quickly provide you thrill and satisfaction for your gaming accomplishments."
  },
  {
    title: "User-Friendly Interface",
    content: "You can easily navigate the app and concentrate on the excitement of gaming without any hassles thanks to our user-friendly interface."
  },
  {
    title: "24/7 Customer assistance",
    content: "To ensure a seamless and trouble-free gaming experience, contact customer assistance at any time of day or night."
  },
  {
    title: "Secure Transactions",
    content: "You can relax knowing that your financial and personal information is safe since your transactions are secured by cutting-edge encryption technology."
  },
  {
    title: "Frequent Updates and Improvements",
    content: "To make sure you always have access to the newest and best features, we are regularly making improvements and introducing new features to improve your gaming experience."
  },
]

const reviews =[
  {
    name:"Javed Akhtar",
    content:"There's not enough 91Club for me! I can spend hours playing the diversity of games, and the real-time incentives make the experience much more exciting. Strongly advised!",
    img:"/img/review1.jpg"
  },
  {
    name:"Rahul Tripathi",
    content:"I enjoy how simple it is to use the app and get started playing straight away as a casual gamer. In addition, the customer service staff is always available to help anytime I need it. Fantastic work, 91Club!",
    img:"/img/review2.jpg"
  },
  {
    name:"Robert",
    content:"Though I've tried a lot of gaming applications, none come close to 91Club. I feel comfortable playing because of the security precautions in place and the frequent upgrades that guarantee there's always something fresh to look forward to.",
    img:"/img/review3.jpg"
  },
  {
    name:"Sonu Yadav",
    content:"Since I've been using 91Club for a few months, I haven't had any problems with transactions or security. It is a trustworthy platform that keeps its word, and I have received some respectable financial incentives along the road.",
    img:"/img/review4.jpg"
  },
]

export default function Home() {
  return (
    <main className="mt-16 pt-6">
      <div className="container p-10">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 banner-border pt-8 rounded-xl">
          <div className="text-center lg:col-span-3 col-span-6 lg:ps-5 px-3 pb-10">
            <h1 className="text-4xl gradient-text text-transparent animate-gradient font-bold leading-tight mb-5">91CLUB ONE OF THE MOST TRUSTED SITE IN INDIA</h1>
            <p className="mb-4 text-lg">Welcome to 91Club - your premier destination for exhilarating gaming experiences! Immerse yourself in a world of thrilling games, including Wingo, Aviator, Color Trading, and many more, offering endless entertainment. 91Club provides a safe and enjoyable platform for gaming enthusiasts.</p>
            <p className="text-lg">Experience the thrill of gaming responsibly with 91Club. Join us for a chance to win exciting rewards while enjoying top-notch entertainment. Discover why 91Club is the go-to choice for those seeking unparalleled fun and excitement.</p>
            <div className="mx-auto mt-10">
              <Link href="https://91in04.com/#/register?invitationCode=814585940557" className='cta-btn px-6 font-semibold py-2 animated-border bg-orange-500 text-white rounded-md my-auto me-2'>Register Now</Link>
              <Link href="https://91in04.com/#/register?invitationCode=814585940557" className='cta-btn px-6 font-semibold py-2 animated-border bg-red-500 text-white rounded-md my-auto me-2'>Login</Link>

            </div>
          </div>
          <div className="lg:col-span-3 m-auto">
            <Image
              src="/img/banner1.jpg"
              width={500}
              height={250}
              className="m-auto w-full"
            />
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <h2>Benefits of Using <strong className="text-red-600">91Club</strong></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              usp.map((item) => (
                <div className="usp-box">
                  <h3 className="mb-4 text-xl">{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              ))
            }
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Earn with <span className="text-red-600 font-bold">91Club</span> Exclusive Bonus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
            <div className="mx-auto">
              <Image
                src="/img/bonus1.jpg"
                width={240}
                height={450}
                alt="Bonus 1"
                className="rounded-lg !border-4 animated-border"
              />
            </div>
            <div className="mx-auto">
              <Image
                src="/img/bonus2.jpg"
                width={240}
                height={450}
                alt="Bonus 2"
                className="rounded-lg !border-4 animated-border"
              />
            </div>
            <div className="mx-auto">
              <Image
                src="/img/bonus3.jpg"
                width={240}
                height={450}
                alt="Bonus 3"
                className="rounded-lg !border-4 animated-border"
              />
            </div>
            <div className="mx-auto">
              <Image
                src="/img/bonus4.jpg"
                width={240}
                height={450}
                alt="Bonus 4"
                className="rounded-lg !border-4 animated-border"
              />
            </div>
            <div className="mx-auto">
              <Image
                src="/img/bonus5.jpg"
                width={240}
                height={450}
                alt="Bonus 5"
                className="rounded-lg !border-4 animated-border"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="contianer">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 ">
            <div className="mx-auto">
              <Image
                src="/img/banner2.jpg"
                width={600}
                height={600}
                alt="Banner2"
                className="rounded-lg"
              />
            </div>
            <div className="lg:pr-24 my-auto">
              <h2 className="text-left text-4xl">Get <span className="text-red-500 font-bold">91Club</span> right now to start your incredible gaming adventure!</h2>
              <p className="text-lg mb-3">With 91Club, experience the thrill of responsible gambling. Users can enjoy their favorite games in a safe and secure atmosphere on our platform. 91Club offers gaming for all skill levels, from novices to experts.</p>
              <p className="text-lg mb-3">Become one of the thousands of happy customers who have chosen 91Club as their go-to gaming app. Start earning rewards now and enjoy the thrill of gaming without taking any chances!</p>
              <p className="text-lg mb-3">Get 91Club right now to start your incredible gaming adventure!</p>
              <div className="mx-auto mt-10">
              <Link href="https://91in04.com/#/register?invitationCode=814585940557" className='cta-btn px-6 font-semibold py-2 animated-border bg-orange-500 text-white rounded-md my-auto me-2'>Register Now</Link>
              <Link href="https://91in04.com/#/register?invitationCode=814585940557" className='cta-btn px-6 font-semibold py-2 animated-border bg-red-500 text-white rounded-md my-auto me-2'>Login</Link>

            </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Our <span className="text-yellow-400 font-bold">Gold</span> Acheivers Users</h2>
          <ReviewCarousel reviews={reviews}/> 
        </div>
      </section>

    </main>
  );
}
