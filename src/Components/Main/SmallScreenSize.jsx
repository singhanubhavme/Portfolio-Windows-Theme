import Image from 'next/image';
import ErrorImg from '../../assets/error404.svg';

function SmallScreenSize() {
  return (
    <section className="mx-auto block bg-white dark:bg-gray-900 md:hidden">
      <div className="container mx-auto min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
            Sorry
          </p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Mobile/Tablet View Not Available
          </h1>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            For the optimal browsing experience, we recommend accessing our
            website from a desktop computer or laptop. You can expect a
            user-friendly interface, rich visuals, and seamless navigation.
          </p>
        </div>

        <div className="relative mt-12 w-full lg:mt-0 lg:w-1/2">
          <Image
            src={ErrorImg}
            className="w-full max-w-lg lg:mx-auto"
            alt="error 404"
          />
        </div>
      </div>
    </section>
  );
}

export default SmallScreenSize;
