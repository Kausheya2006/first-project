import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10 px-6 text-white">
      <div className="text-center font-bold text-4xl mb-8">
        <p>Tired of Losing Items in OBH?</p>
      </div>

      <div className="bg-slate-950 p-8 rounded-lg shadow-lg w-full max-w-4xl space-y-8">
        <div className="text-lg leading-relaxed">
          <p>
            The group created for hostel queries has turned into a boys' group. 
            So, posts related to queries often get overlooked or ignored. Also people are hesitant to report found items as they think he will be cooked by others and will be called a thief.
            I designed this site to assist those who face these challenges.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">General Rules:</h3>
          <ul className="list-disc list-inside text-base space-y-3 pl-4">
            <li>
             Please  <strong>don't</strong> makefake accounts (when this site is actually hosted).
            </li>
            <li>
                On clicking Claim, the data is parmanently removed from database. So, <strong>click it only</strong> after you have received your item.
            </li>
            <li>
                Please,<strong>dont claim</strong> other's goods (honesty please). I will do something to fix this in the future.      
            </li>
           
          </ul>
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Known Issues within the site:</h3>
          <ul className="list-disc list-inside text-base space-y-3 pl-4">
            <li>
              I haven’t obtained a secret key for other authentications apart from GitHub. 
              <span className="font-semibold"> So, Please sign in using GitHub till now.</span>
            </li>
            <li>
              Currently, you need to provide an item picture URL instead of uploading the picture itself. 
              <span className="font-semibold"> I’ll work on fixing this in the future.</span>
            </li>
            <li>
                You have to reload after claiming to see the effect. <span className="font-semibold"> I will try to do something about it. </span>

            </li>
            <li>
              Try looking for other issues so that this site becomes useful for the greater mass.
              <span className="font-semibold"> I will try to make a better and modern UI in the future. </span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white">Frameworks used</h3>
          <ul className="list-disc list-inside text-base space-y-3 pl-4">
            <li>
              <span className='font-semibold'>Next.js</span> for front-end and back-end
            </li>
            <li>
            <span className='font-semibold'>Tailwind CSS</span> for styles
            </li>
            <li>
            <span className='font-semibold'>MongoDB along with Mongoose </span> for database
            </li>
            <li>
            <span className='font-semibold'>NextAuth</span> for authentication
            </li>
          </ul>
        </div>
      </div>

    
    </div>
  );
};

export default About;
