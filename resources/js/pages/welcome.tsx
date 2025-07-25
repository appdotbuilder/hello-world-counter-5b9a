import { Head, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
    count: number;
    [key: string]: unknown;
}

export default function Welcome({ count }: Props) {

    const handleIncrement = () => {
        router.post(route('counter.store'), {}, {
            preserveState: true,
            preserveScroll: true
        });
    };

    return (
        <>
            <Head title="Hello World">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-center shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-8 text-4xl font-bold">Hello World</h1>
                            
                            <div className="mb-8 space-y-6">
                                <div className="text-xl">
                                    <span className="text-[#706f6c] dark:text-[#A1A09A]">Counter: </span>
                                    <span className="text-3xl font-bold text-[#f53003] dark:text-[#FF4433]">{count}</span>
                                </div>
                                
                                <Button 
                                    onClick={handleIncrement}
                                    className="px-8 py-3 text-lg bg-[#f53003] hover:bg-[#d42c02] text-white rounded-lg shadow-lg transition-colors duration-200 dark:bg-[#FF4433] dark:hover:bg-[#e63c2e]"
                                >
                                    Click Me!
                                </Button>
                            </div>
                            
                            <footer className="mt-12 text-sm text-[#706f6c] dark:text-[#A1A09A]">
                                A simple counter application
                            </footer>
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}