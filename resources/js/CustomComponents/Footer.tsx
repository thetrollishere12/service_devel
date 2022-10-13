import React from 'react';

const env = import.meta.env;

export default function Footer() {
  return (
    <footer className="bg-zinc-800 px-4">
        <div className="md:flex py-12 max-w-7xl mx-auto sm:px-3 text-white">
          <div className="footer-box w-full">
            <b className="text-sm py-1">CONTENT</b>
            <div className="text-sm py-1"><a href="{{ url('track-order') }}">Track Order</a></div>
            <div className="text-sm py-1"><a href="{{ url('shop/setup/get-started') }}">Sell With Us</a></div>
            <div className="text-sm py-1"><a href="{{ url('faq') }}">FAQ</a></div>
            {/* <div class="text-sm"><a href="{{ url('marketplace?format=360') }}">360</a></div>
            <div class="text-sm"><a href="{{ url('marketplace?format=video') }}">Video</a></div>
            <div class="text-sm"><a href="{{ url('marketplace?format=image') }}">Image</a></div>
            <div class="text-sm"><a href="{{ url('subscription-pricing') }}">Plans & Pricing</a></div> */}
          </div>
          <div className="footer-box w-full">
            <b className="text-sm py-1">HELP</b>
            <div className="text-sm py-1"><a href="{{ url('contact') }}">Contact Us</a></div>
            <div className="text-sm py-1"><a href="{{ url('terms-of-service') }}">Terms &amp; Condition</a></div>
            <div className="text-sm py-1"><a href="{{ url('privacy-policy') }}">Privacy Policy</a></div>
            <div className="text-sm py-1"><a href="{{ url('privacy-policy') }}">Copyright Infringement</a></div>
          </div>
          <div className="footer-box w-full">
            <b className="text-sm py-1">SOCIAL MEDIA</b>
            <div className="social-media-box flex text-md">

              {env.VITE_SOCIAL_MEDIA_FACEBOOK && <a href='{env.VITE_SOCIAL_MEDIA_FACEBOOK}'><div class="icon-facebook-box rounded-md p-2 mr-1"><span class="icon-facebook"></span></div></a>}
              {env.VITE_SOCIAL_MEDIA_PINTEREST && <a href='{env.VITE_SOCIAL_MEDIA_PINTEREST}'><div class="icon-pinterest-box rounded-md p-2 mr-1"><span class="icon-pinterest"></span></div></a>}
              {env.VITE_SOCIAL_MEDIA_YOUTUBE && <a href='{env.VITE_SOCIAL_MEDIA_YOUTUBE}'><div class="icon-youtube-box rounded-md p-2 mr-1"><span class="icon-youtube"></span></div></a>}
              {env.VITE_SOCIAL_MEDIA_WHATSAPP && <a href='{env.VITE_SOCIAL_MEDIA_WHATSAPP}'><div class="icon-whatsapp-box rounded-md p-2 mr-1"><span class="icon-whatsapp"></span></div></a>}
              {env.VITE_SOCIAL_MEDIA_INSTAGRAM && <a href='{env.VITE_SOCIAL_MEDIA_INSTAGRAM}'><div class="icon-instagram-box rounded-md p-2 mr-1"><span class="icon-instagram"></span></div></a>}
              {env.VITE_SOCIAL_MEDIA_TIKTOK && <a href='{env.VITE_SOCIAL_MEDIA_TIKTOK}'><div class="icon-tiktok-box rounded-md p-2 mr-1"><span class="icon-tiktok"></span></div></a>}
                      
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-center py-2">
          <div><img src="{{ asset('image/amex.svg') }}" /></div>
          <div><img src="{{ asset('image/diners.svg') }}" /></div>
          <div><img src="{{ asset('image/discover.svg') }}" /></div>
          <div><img src="{{ asset('image/jcb.svg') }}" /></div>
          <div><img src="{{ asset('image/mastercard.svg') }}" /></div>
          <div><img src="{{ asset('image/paypal.svg') }}" /></div>
          <div><img src="{{ asset('image/unionpay.svg') }}" /></div>
          <div><img src="{{ asset('image/visa.svg') }}" /></div>
        </div>
        <div className="copyright text-center text-white text-xs pt-4 pb-10">© {/*?php echo date("Y"); ?*/} Copyright {'{'}{'{'} env('APP_NAME') {'}'}{'}'}. All Rights Reserved.</div>
      </footer>
  );
}
