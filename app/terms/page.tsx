import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Not Financial Advice</h2>
              <p className="text-gray-700 mb-4">
                This website and project are for educational and community purposes only. Nothing 
                on this website constitutes financial, investment, or trading advice. Always do 
                your own research and consult with a qualified financial advisor before making any 
                investment decisions.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Risk Disclaimer</h2>
              <p className="text-gray-700 mb-4">
                Cryptocurrency and token investments carry significant risk. You may lose all or 
                part of your investment. Never invest more than you can afford to lose. Past 
                performance does not guarantee future results.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Guarantees</h2>
              <p className="text-gray-700 mb-4">
                We make no guarantees about the future value, performance, or success of any token 
                or project. All investments are speculative and carry inherent risks.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, FireHorse 2026 and its operators shall 
                not be liable for any indirect, incidental, special, consequential, or punitive 
                damages resulting from your use of this website or participation in any related 
                activities.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. Your continued use of the 
                website after any changes constitutes acceptance of the new terms.
              </p>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
              <p className="text-gray-700">
                If you have questions about these Terms of Service, please contact us through our 
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

