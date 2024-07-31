import { Poppins, Open_Sans } from 'next/font/google'

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ], subsets: ['latin'] })

const openSans = Open_Sans({ weight: [ '300', '400', '500', '600', '700', '800' ], subsets: ['latin'] })

export { poppins, openSans }