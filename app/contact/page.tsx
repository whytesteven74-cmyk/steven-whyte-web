
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Steven Whyte",
    description: "Get in touch for speaking, collaboration, or support.",
};

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-light text-slate-dark mb-8 tracking-tight">
                Connect
            </h1>

            <div className="prose prose-slate prose-lg">
                <p className="text-slate-600 mb-10 leading-relaxed">
                    I am available for speaking engagements, workshops, and 1:1 mentorship focused on men's mental health and trauma recovery.
                </p>

                <div className="space-y-8">
                    <div className="p-6 bg-sand-light/30 rounded-lg border border-sand-dark/10">
                        <h3 className="text-xl font-medium text-slate-dark mb-2">General Inquiries</h3>
                        <p className="text-slate-600 mb-4">
                            For general questions or just to say hello.
                        </p>
                        <a
                            href="mailto:contact@stevenwhyte.com"
                            className="text-clay-dark hover:text-clay-DEFAULT font-medium transition-colors"
                        >
                            contact@stevenwhyte.com
                        </a>
                    </div>

                    <div className="p-6 bg-sand-light/30 rounded-lg border border-sand-dark/10">
                        <h3 className="text-xl font-medium text-slate-dark mb-2">Speaking & Press</h3>
                        <p className="text-slate-600 mb-4">
                            For podcast appearances, interviews, or event booking.
                        </p>
                        <a
                            href="mailto:press@stevenwhyte.com"
                            className="text-clay-dark hover:text-clay-DEFAULT font-medium transition-colors"
                        >
                            press@stevenwhyte.com
                        </a>
                    </div>
                </div>

                <div className="mt-12 text-sm text-slate-400">
                    <p>
                        Based in the UK. Available globally.
                    </p>
                </div>
            </div>
        </div>
    );
}
