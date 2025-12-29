import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We do not collect any personal information or use tracking cookies on this website.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact us through our 
                official Telegram or X channels.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

