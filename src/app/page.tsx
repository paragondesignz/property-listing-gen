"use client";
import React, { useState } from 'react';
import { Building2, Home, MapPin, Sparkles, Send } from 'lucide-react';

export default function PropertyListingGen() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const generate = () => {
    setLoading(true);
    // Mocking AI generation
    setTimeout(() => {
      setResult(`Stunning Modern Home in ${address || 'Gulf Harbour'}. 
      
This beautifully presented property offers a perfect blend of comfort and style. Featuring spacious living areas, a gourmet kitchen, and breath-taking views, this home is ideal for those seeking a premium lifestyle. 

Close to local amenities, schools, and parks. Don't miss this opportunity!`);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center gap-3 mb-12">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Building2 className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold">PropAI Listing Generator</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-zinc-200">
              <label className="block text-sm font-semibold mb-2 uppercase tracking-wider text-zinc-500">Property Address</label>
              <input 
                type="text" 
                className="w-full p-3 border border-zinc-200 rounded-xl mb-4" 
                placeholder="e.g. 6 Kaipuke Crescent, Gulf Harbour"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              
              <button 
                onClick={generate}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                {loading ? 'Generating...' : <><Sparkles className="w-5 h-5" /> Generate Listing</>}
              </button>
            </div>
          </div>

          <div className="bg-zinc-900 text-zinc-100 p-6 rounded-2xl shadow-xl min-h-[300px]">
             <div className="flex items-center justify-between mb-4 border-b border-zinc-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Preview</span>
                <Send className="w-4 h-4 text-zinc-500" />
             </div>
             {result ? (
               <div className="whitespace-pre-wrap leading-relaxed">{result}</div>
             ) : (
               <div className="flex flex-col items-center justify-center h-full text-zinc-500 text-sm italic">
                  Enter an address and click generate to see your listing here.
               </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
}
