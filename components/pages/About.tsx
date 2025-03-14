import { NextPage } from 'next';
import Image from 'next/image';
import bg from '@/assets/images/about1.jpg';
import Link from 'next/link';
import logo from '@/assets/images/logo.png';

const About: NextPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0">
        <Image
          src={bg}
          className="object-cover"
          alt="Background image"
          layout="fill"
          //   objectFit="cover"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-black bg-opacity-50">
        {/* <Link href="/" className="flex gap-2 mb-8">
          <Image src={logo} width={30} height={30} alt="Logo" />
          <span>Flavour Fiesta</span>
        </Link> */}
        <div className="max-w-7xl mx-auto p-8 text-white">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-center">About Us</h1>
          </header>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              Welcome to Flavour Fiesta!
            </h2>
            <p className="text-lg">
              At Flavour Fiesta, we believe that cooking is more than just
              preparing food &ndash; it&apos;s a way to bring people together,
              express creativity, and nourish the soul. Our mission is to
              inspire and empower home cooks of all levels to create delicious,
              healthy, and beautiful meals.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg">
              Founded in 2004, Flavour Fiesta started as a small blog by Ipsita
              and Jai Ganesh, a passionate home cook with a love for sharing
              recipes and culinary tips. What began as a hobby has now grown
              into a thriving community of food enthusiasts from around the
              world.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Recipes:</strong> A diverse collection of recipes, from
                quick weeknight dinners to elaborate holiday feasts, all tested
                and perfected in our kitchen.
              </li>
              <li>
                <strong>Cooking Tips &amp; Techniques:</strong> Expert advice
                and step-by-step guides to help you master essential cooking
                skills and techniques.
              </li>
              <li>
                <strong>Ingredient Guides:</strong> In-depth information about
                ingredients, including their health benefits, culinary uses, and
                how to select and store them.
              </li>
              <li>
                <strong>Meal Plans:</strong> Customized meal plans to suit
                various dietary needs and preferences, making it easy to plan
                your weekly menus.
              </li>
              <li>
                <strong>Videos:</strong> Engaging video tutorials that bring our
                recipes and cooking tips to life.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
            <p className="text-lg">At Flavour Fiesta, we believe that:</p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Everyone Can Cook:</strong> Whether you&apos;re a
                seasoned chef or just starting out, our recipes and tips are
                designed to be accessible and achievable for all skill levels.
              </li>
              <li>
                <strong>Quality Ingredients Matter:</strong> We prioritize
                fresh, wholesome ingredients and support sustainable and ethical
                food practices.
              </li>
              <li>
                <strong>Cooking Should Be Fun:</strong> We encourage creativity
                and experimentation in the kitchen, making cooking an enjoyable
                and rewarding experience.
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>[Founder&apos;s Name]</strong> &ndash; Founder and Head
                Chef
              </li>
              <li>
                <strong>[Team Member 1 Name]</strong> &ndash; Recipe Developer
              </li>
              <li>
                <strong>[Team Member 2 Name]</strong> &ndash; Food Photographer
              </li>
              <li>
                <strong>[Team Member 3 Name]</strong> &ndash; Nutritionist
              </li>
            </ul>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
            <p className="text-lg">
              We invite you to join our growing community of food lovers. Follow
              us on [Social Media Links] for the latest recipes, tips, and
              culinary inspiration. Don&apos;t forget to subscribe to our
              newsletter for exclusive content and special offers!
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-lg">
              Have questions, feedback, or collaboration inquiries? We&apos;d
              love to hear from you! Reach out to us at [Email Address] or visit
              our
              <Link href="/contact" className="text-blue-500">
                Contact Page
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
