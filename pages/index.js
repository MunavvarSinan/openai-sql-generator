import { useState } from 'react';
import Footer from '../components/Footer';

export default function Home() {
  const [data, setData] = useState({ data: '' });
  const [query, setQuery] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (event) => {
    event.preventDefault();
    if (query) {
      setIsLoading(true);
      const res = await fetch(`/api/ai`, {
        body: JSON.stringify({
          promptData: query,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });
      const data = await res.json();
      setData(data);
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className='bg-gray-900 text-white font-spacemono'>
        <div className='mx-auto max-w-screen-xl px-4 py-12 flex h-full '>
          <div className='mx-auto max-w-3xl mt-10 text-center'>
            <h1 className='bg-gradient-to-r from-green-300  via-blue-500 to-purple-600 bg-clip-text text-3xl font-bold text-transparent sm:text-5xl'>
              SQL QUERY GENERATOR
              <span className='sm:block '>
                BUILT WITH{' '}
                <a className='font-bold ' href='https://openai.com/api/'>
                  OPENAI.
                </a>
              </span>
            </h1>

            <p className='mx-auto mt-4  sm:text-lg sm:leading-relaxed'>
              OpenAI's SQL query generator is an AI-based system for
              automatically generating SQL queries from natural language text.
              The system is designed to take a user query in natural language
              and generate a valid SQL query.
            </p>
            <label className='block mt-20 text-start mb-5 text-xl font-bold text-gray-900 dark:text-white'>
              Enter your Query in Natural Language
            </label>

            <p className='text-start mb-3'>
              Example: Create a SQL request to find all users who visited from
              Chrome and Safari
            </p>
            <textarea
              type='text'
              cols='50'
              rows='5'
              placeholder="Note: This is a beta version of the SQL Query Generator. It's not perfect, but it's getting better every day. Please be patient and try to be as specific as possible."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'></textarea>

            <button
              type='submit'
              onClick={(e) => fetchData(e)}
              className='w-full mt-5 inline-block rounded border border-white bg-gradient-to-r from-green-300  via-blue-500 to-purple-600 px-12 py-3 text-sm font-medium text-white   focus:outline-none focus:ring '>
              SUBMIT
            </button>

            {isLoading ? (
              <div role='status' className=''>
                <svg
                  aria-hidden='true'
                  className='mr-auto ml-auto mt-5 w-10 h-10  text-gray-200 animate-spin dark:text-gray-600 fill-blue-300'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
                <span className='sr-only'>Loading...</span>
              </div>
            ) : data.data === '' ? null : (
              <>
                <p className='block mt-5 text mb-5 text-xl font-bold text-gray-900 dark:text-white'>
                  Your SQL query 👇
                </p>
                <code>{data.data} </code>
              </>
            )}
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
