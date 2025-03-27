const navigation = {
    solutions: [
      {
        name: '1st Gotherington',
        href: 'https://www.scouts.org.uk/groups/10016416?loc=gl53&page=9&slug=1st-Gotherington',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        name: '3rd Tewkesbury',
        href: 'https://www.scouts.org.uk/groups/10013383?loc=Bredon%20&slug=3rd-Tewkesbury',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        name: '2nd Twyning',
        href: 'https://www.scouts.org.uk/groups/10014641?loc=Bredon%20&slug=2nd-Twyning',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        name: '1st Winchcombe',
        href: 'https://www.winchcombescouts.co.uk/',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        name: '1st Woodmancote',
        href: 'https://fwsg.org.uk',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
    support: [
      { name: 'Activity Notification', href: '/volunteers/activity-notification' },
      { 
        name: 'Apply for Nights Away', 
        href: 'https://membership.scouts.org.uk/#/programmesupport/nightsaways/applyfornightsaway',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      { name: 'Training calendar', 
        href: 'https://bookwhen.com/gscouts',
        target: '_blank',
        rel: 'noopener noreferrer',        
      },
      {
        name: 'Transformation support',
        href: 'https://gscouts.org.uk/transforming-scouts/transformation-support',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
    ],
    company: [
      { name: 'About us', href: '/about' },
      { 
        name: 'Gloucestershire Scouts', 
        href: 'https://www.gscouts.org.uk',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      { 
        name: 'Scouts', 
        href: 'https://www.scouts.org.uk',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      { 
        name: 'Scout Store', 
        href: 'https://shop.scouts.org.uk', 
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      { 
        name: 'Online Scout Manager', 
        href: 'https://www.onlinescoutmanager.co.uk',
        target: '_blank',
        rel: 'noopener noreferrer',
       },
    ],
    social: [
      {
        name: 'Facebook',
        href: 'https://www.facebook.com/tewkesburydistrict/',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: 'X',
        href: 'https://x.com/TewkesburyScout',
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
          </svg>
        ),
      },
    ],
  };
  
  export default function Footer() {
    return (
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 pb-12 pt-8 mt-24 sm:pt-16 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1st Column: Copyright and Socials */}
            <div>
              <p className="text-sm/6 text-gray-600">
                © 2025 Tewkesbury District Scouts. <br/>All rights reserved.
              </p>
              <div className="flex gap-x-6 mt-4">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-600 hover:text-gray-800">
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="size-6" />
                  </a>
                ))}
              </div>
            </div>
            {/* 2nd Column: Groups */}
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">Groups</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.target || '_self'} // Use item.target, default to '_self' if not provided
                      rel={item.rel || ''} // Use item.rel, default to empty string if not provided
                      className="text-sm/6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* 3rd Column: Volunteers */}
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">Volunteers</h3>
              <ul role="list" className="mt-6 space-y-4">
              {navigation.support.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  target={item.target || '_self'} // Use item.target, default to '_self' if not provided
                  rel={item.rel || ''} // Use item.rel, default to empty string if not provided
                  className="text-sm/6 text-gray-600 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
              </ul>
            </div>
            {/* 4th Column: Useful Links */}
            <div>
              <h3 className="text-sm/6 font-semibold text-gray-900">Useful Links</h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target={item.target || '_self'} // Use item.target, default to '_self' if not provided
                      rel={item.rel || ''} // Use item.rel, default to empty string if not provided
                      className="text-sm/6 text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }