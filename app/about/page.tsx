import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 max-w-2xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center font-space-grotesk">About Quench: Your Vibe, Juiced.</h1>
        <div className="prose dark:prose-invert mx-auto text-lg">
          <p>Hey fam! Welcome to Quench, where we're shaking things up in the juice game. We're a modern juice business that's blended the freshest fruits and veggies with the coolest tech to bring you an experience like no other.</p>
          <p>Think of us as your plug for delicious, healthy sips that fit right into your fast-paced life. We're all about making healthy choices easy, fun, and totally you.</p>
          <p>But behind the tech, our juices are carefully crafted by humans who are passionate about blending the freshest fruits and veggies to perfectly quench your thirst. We're not just selling juice, we're serving a whole experience built on quality and care.</p>
          <p>Got questions about our flavours? Need help placing an order? Say hello to <b>Sussan</b>! She's not your average customer service agent – Sussan is our super-smart, always-helpful digital assistant who's got all the answers and is ready to give you the hookup you need, fast. Seriously, slide into our DMs and see for yourself!</p>
          <p>At Quench, our mission is simple but mighty: we want to help young people like you fall in love with juice and ride the wave of the juicing movement. We believe that good health starts from within, and what better way to fuel your hustle than with vibrant, natural goodness?</p>
          <p>And we're more than just bottles of juice. We're building a community! We have big plans to throw epic juice parties and events that will bring together people who share the same interest in health, good vibes, and amazing drinks. Get ready to connect, chill, and sip with the coolest crowd.</p>
          <p>Behind all this juiced-up goodness is our founder, <b>David Isaac</b>. A young, motivated Nigerian youth who discovered the incredible power of juice firsthand, using it to heal himself. His journey fuels everything we do, driving us to share the benefits of juicing with you.</p>
          <p className="font-bold text-green-700 dark:text-green-600">Ready to quench your thirst and join the movement?</p>
          <p>Explore our flavours, chat with Sussan, and get ready to experience juice the Quench way!</p>
        </div>
      </main>
      <Footer />
    </div>
  )
} 