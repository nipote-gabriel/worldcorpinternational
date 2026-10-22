/* WorldCorp International — site content */

window.WC = window.WC || {};

WC.centres = [
    {
        id: 'new-economy',
        name: 'Centre for the New Economy and Fewer Companies',
        short: 'Centre for the New Economy and Fewer Companies',
        mission: 'Helping markets reach their natural conclusion.',
        desc: 'Competition has driven extraordinary innovation. Our Centre works with business leaders to make sure that innovation is never wasted on duplicate products. We support companies through every stage of combination, from early conversations to final integration, so that markets can settle into their most efficient form.',
        initiatives: [
            ['Merger Readiness Accelerator', 'Since 2024'],
            ['The Last Mile Partnership', 'Ride-hailing, delivery and transport, together'],
            ['Brand Rationalization Index', 'Annual']
        ],
        img: 'assets/img/centre-new-economy.jpg',
        tint: 'tint-teal'
    },
    {
        id: 'nature-climate',
        name: 'Centre for Nature and Climate Efficiency',
        short: 'Centre for Nature and Climate Efficiency',
        mission: 'Optimizing the planet for long-term performance.',
        desc: 'The natural world is complex, redundant and largely unmanaged. We convene governments, scientists and asset managers to bring the planet’s ecosystems under clear, accountable stewardship, with quarterly reporting on biodiversity, carbon and yield.',
        initiatives: [
            ['Nature Under One Roof', 'Flagship'],
            ['1 Trillion Trees (Single Species)', 'In progress'],
            ['Ocean Rationalization Alliance', 'Since 2025']
        ],
        img: 'assets/img/centre-nature.jpg',
        tint: 'tint-ocean'
    },
    {
        id: 'final-industrial-revolution',
        name: 'Centre for the Fourth and Final Industrial Revolution',
        short: 'Centre for the Fourth and Final Industrial Revolution',
        mission: 'Ensuring this is the last one we need.',
        desc: 'Each industrial revolution has brought enormous progress and significant disruption. We believe the next one should be well planned, broadly beneficial and conclusive. Our Centre helps governments and companies adopt frontier technologies in a coordinated, single-vendor way.',
        initiatives: [
            ['AI Governance Alliance', 'Founding member: AI'],
            ['Global Standard for Everything', 'Draft 4'],
            ['Digital Trust, Consolidated', 'Since 2026']
        ],
        img: 'assets/img/centre-industrial.jpg',
        tint: 'tint-indigo'
    },
    {
        id: 'cities',
        name: 'Centre for Cities and Urban Consolidation',
        short: 'Centre for Cities and Urban Consolidation',
        mission: 'Fewer places. Better places.',
        desc: 'More than half of humanity now lives in cities, and more arrive every day. We help mayors plan for that growth by bringing services, neighbourhoods and, where appropriate, entire cities together into simpler, more navigable wholes.',
        initiatives: [
            ['The One-Store City', 'Pilot districts in 6 countries'],
            ['Metro Area Mergers', 'Ongoing'],
            ['Sister Cities to Twin Cities', 'Since 2025']
        ],
        img: 'assets/img/centre-cities.jpg',
        tint: 'tint-ember'
    },
    {
        id: 'health',
        name: 'Centre for Health and Human Efficiency',
        short: 'Centre for Health and Human Efficiency',
        mission: 'Healthier people. Fewer interruptions.',
        desc: 'A healthy population is a productive population. We partner with health systems and employers to reduce sick days, sleep inefficiencies and other avoidable downtime across the entire human life cycle.',
        initiatives: [
            ['Global Wellbeing at Work Compact', '1,200 signatories'],
            ['The Eight-Hour Sleep Review', 'Consultation open'],
            ['Preventive Care for Productivity', 'Since 2024']
        ],
        img: 'assets/img/centre-health.jpg',
        tint: 'tint-amber'
    },
    {
        id: 'geopolitics',
        name: 'Centre for Regional and Geopolitical Simplification',
        short: 'Centre for Regional and Geopolitical Simplification',
        mission: 'From 193 to a more manageable number.',
        desc: 'Every border is a negotiation. Our Centre works with heads of state, regional bodies and a carefully selected group of citizens to reduce the coordination costs of a world divided into too many parts, through voluntary pairing, phased border sunsetting and structured periods of reflection.',
        initiatives: [
            ['Country Strategy Meetings', 'Next: Benelux, November 2026'],
            ['Voluntary Pairing Framework', 'Since 2025'],
            ['Phased Border Sunsetting', 'Pilot']
        ],
        img: '',
        tint: 'tint-blue'
    },
    {
        id: 'workforce',
        name: 'Centre for Workforce Optimization',
        short: 'Centre for Workforce Optimization',
        mission: 'Preparing people for the jobs of the future, and for there being fewer of them.',
        desc: 'The nature of work is changing faster than ever. We bring together employers, educators and workers to make that transition orderly, upbeat and quick, with a particular focus on flexibility, resilience and availability.',
        initiatives: [
            ['Reskilling Revolution 2.0', '1 billion people by 2030'],
            ['Seven-Day Flexibility Pledge', 'Open for signatures'],
            ['The Future of Jobs Report', 'Biennial']
        ],
        img: 'assets/img/centre-workforce.jpg',
        tint: 'tint-slate'
    },
    {
        id: 'finance',
        name: 'Centre for Financial and Monetary Unity',
        short: 'Centre for Financial and Monetary Unity',
        mission: 'One currency. One bank. One very large account.',
        desc: 'Fragmented financial systems create cost, confusion and currency exchange booths. We work with central banks and commercial lenders toward a global financial architecture simple enough to fit on a single statement.',
        initiatives: [
            ['The One Account Initiative', 'Flagship'],
            ['Global Currency Working Group', 'Since 2025'],
            ['Financial Inclusion Through Consolidation', 'Ongoing']
        ],
        img: '',
        tint: 'tint-indigo'
    },
    {
        id: 'harmonized-thought',
        name: 'Centre for Harmonized Thought',
        short: 'Centre for Harmonized Thought',
        mission: 'Shared challenges deserve shared conclusions.',
        desc: 'Disagreement is a valuable part of any healthy debate, up to a point. We help leaders, institutions and the public reach alignment early, so that time once spent debating can be redirected toward implementation.',
        initiatives: [
            ['Stakeholder Listening at Scale', 'Powered by AI'],
            ['The Consensus Pre-Agreement Protocol', 'Since 2026'],
            ['Global Narratives Partnership', 'Members only']
        ],
        img: 'assets/img/centre-thought.jpg',
        tint: 'tint-violet'
    }
];

WC.stories = [
    {
        slug: 'fewer-countries-by-2040',
        type: 'Article',
        topic: 'Geopolitics',
        centre: 'geopolitics',
        date: '20 Oct 2026',
        read: '6 min read',
        author: 'Ingrid Vallmark',
        role: 'Head, Centre for Regional and Geopolitical Simplification',
        title: 'The world has 193 countries. Here’s how we get that number down by 2040',
        dek: 'Every border is a negotiation. Fewer borders mean fewer negotiations, and a calmer, more productive century for everyone.',
        img: 'assets/img/story-borders.jpg',
        caption: 'Bridges connect neighbouring communities. Mergers can connect them further.',
        key: [
            'Up to 70% of diplomatic effort is spent on logistics that would not exist in a world with fewer countries.',
            'WorldCorp has identified three pathways: voluntary pairing, phased border sunsetting and structured reflection.',
            'Local customs, cuisines and sports teams would be preserved and, where possible, licensed.'
        ],
        body: [
            'There are currently 193 member states of the United Nations, each with its own flag, currency, anthem, tax code and opinion. Individually, many of them are doing excellent work. Collectively, they represent one of the largest coordination challenges in human history.',
            'Consider the average global summit. Before a single decision can be made, delegations must agree on a venue, a seating plan, interpretation into six official languages and, increasingly, whose turn it is to host. Our analysis suggests that up to 70% of diplomatic effort is spent on logistics that would not exist in a world with, say, twelve countries.',
            { quote: 'Nations, like companies, reach a size where a merger simply makes sense.' },
            'This is not about erasing identity. Local customs, cuisines and sports teams would be preserved and, where possible, licensed. It is about recognizing that the structures we inherited were designed for a slower, larger world.',
            { h2: 'Three pathways' },
            'Our Centre has identified three practical routes forward. The first is voluntary pairing, in which neighbouring states with compatible legal systems share a single parliament on a rotating basis. The second is phased border sunsetting, beginning with the borders that very few people cross anyway. The third, for states that remain hesitant, is a structured period of reflection.',
            'Early pilots are encouraging. In a recent simulation, participants representing six European countries agreed on a shared flag in under four hours.',
            'The century ahead will be defined by challenges no single country can solve alone. It makes sense, then, to have fewer of them try.'
        ]
    },
    {
        slug: 'financial-inclusion-one-bank',
        type: 'Article',
        topic: 'Finance',
        centre: 'finance',
        date: '17 Oct 2026',
        read: '5 min read',
        author: 'Marcus Oyelaran-Whitfield',
        role: 'Lead, Financial Inclusion Through Consolidation',
        title: 'Access without the right owner isn’t true financial inclusion',
        dek: 'Billions of people now have a bank account. The next step is making sure it’s the same bank.',
        img: '',
        key: [
            'More than a billion people have entered the formal financial system in the past decade.',
            'Many now hold accounts across several providers, which is not inclusion but fragmentation.',
            'True inclusion means every person on Earth banking with a single, trusted institution.'
        ],
        body: [
            'Over the past decade, financial inclusion has been one of the quiet success stories of the global economy. Mobile banking, digital wallets and microfinance have brought more than a billion people into the formal financial system for the first time.',
            'But access is only half the story. Today’s newly banked customer may hold accounts across three providers, two payment apps and a cryptocurrency they do not fully remember buying. Each relationship carries its own fees, passwords and terms of service. That is not inclusion. That is fragmentation.',
            { quote: 'When someone in Lagos sends money to someone in Lima, it should never have to leave the building.' },
            'True inclusion means that every person on Earth can save, borrow, spend and be gently reminded of their balance through a single, trusted institution. It means one login. It means one set of terms.',
            'Achieving this will require courage from regulators, patience from customers and, in most markets, several acquisitions. The Centre for Financial and Monetary Unity is convening central banks, commercial lenders and two very large commercial lenders to map the path forward.',
            'Our goal is simple: a world where no one is left out of the financial system, because there is only one.'
        ]
    },
    {
        slug: 'four-day-to-seven-day-week',
        type: 'Article',
        topic: 'Workforce',
        centre: 'workforce',
        date: '15 Oct 2026',
        read: '4 min read',
        author: 'Priya Castellanos-Moore',
        role: 'Head, Centre for Workforce Optimization',
        title: '5 ways the four-day work week can become a seven-day work week',
        dek: 'Flexibility is the future of work. Leading employers are giving their people more of it, every day of the week.',
        img: 'assets/img/story-workweek.jpg',
        caption: 'Flexible working means the office is available whenever you are.',
        body: [
            'The four-day work week has captured imaginations around the world, and for good reason. Workers who are trusted with flexibility consistently report higher engagement. Our research suggests the logical next step is to extend that flexibility to all seven days.',
            { list: [
                '<strong>Reframe the weekend as optional.</strong> Saturdays and Sundays were designed for an industrial economy. In a knowledge economy, they can be offered as a benefit, available on request.',
                '<strong>Let people work where they live.</strong> Remote work has blurred the line between office and home. Leading employers are now removing the line entirely.',
                '<strong>Measure outcomes, not hours.</strong> When performance is judged by results, employees are free to deliver them at any time, including all of it.',
                '<strong>Invest in wellbeing.</strong> Seven-day schedules work best when paired with meditation apps, standing desks and a short daily email about rest.',
                '<strong>Lead by example.</strong> Executives who reply to messages on Sunday evening signal to their teams that Sunday evening is a normal, healthy time to be productive.'
            ] },
            'None of these changes happen overnight. With the right tools, though, they can happen overnight too.'
        ]
    },
    {
        slug: 'country-strategy-meeting-benelux',
        type: 'Forum in Focus',
        topic: 'Forum in Focus',
        centre: 'geopolitics',
        date: '13 Oct 2026',
        read: '3 min read',
        author: 'WorldCorp Newsroom',
        role: '',
        title: 'What to know about the Country Strategy Meeting on Merging the Benelux',
        dek: 'Leaders from Belgium, the Netherlands and Luxembourg will meet in Vaduz to explore a simpler arrangement for a region that already shares most things.',
        img: 'assets/img/story-benelux.jpg',
        caption: 'Preparatory sessions for the Country Strategy Meeting took place in October.',
        body: [
            'Belgium, the Netherlands and Luxembourg have long been described together. They share a customs union, a passport-free area and a collective name. This November, WorldCorp International will host a Country Strategy Meeting to ask the natural next question.',
            'Over two days, heads of government, business leaders and a carefully selected group of citizens will discuss what a unified Benelux could look like, from a combined football team to a single, efficient royal family.',
            { h2: 'Key themes' },
            { list: [
                'Harmonizing three tax systems into one.',
                'Choosing a capital city by consensus or, if necessary, by lot.',
                'Determining which of the region’s languages will serve as the primary one going forward.'
            ] },
            'The meeting builds on WorldCorp’s long-standing work through the Centre for Regional and Geopolitical Simplification, and on the success of the 2025 pilot in which two Dutch municipalities merged without anybody noticing.',
            'Sessions will be livestreamed to members. Outcomes will be shared with the public once they have been finalized.'
        ]
    },
    {
        slug: 'nature-single-owner',
        type: 'Article',
        topic: 'Nature and Climate',
        centre: 'nature-climate',
        date: '9 Oct 2026',
        read: '5 min read',
        author: 'Dr. Henrik Saltonstall',
        role: 'Director, Nature Under One Roof',
        title: 'Nature is one of the world’s most valuable assets. It’s time it had a single owner',
        dek: 'Forests, oceans and wetlands are currently managed by thousands of stakeholders. Clear ownership is the first step toward clear stewardship.',
        img: 'assets/img/story-nature.jpg',
        caption: 'Natural assets remain among the least consolidated on Earth.',
        body: [
            'Nature underpins nearly every sector of the global economy, from agriculture to tourism to the bottled water on this table. Yet it remains one of the few assets on Earth with no clear owner, no balance sheet and no investor relations team.',
            'The result is a classic coordination problem. When a river runs through four countries, nobody is fully accountable for it. When a rainforest is shared by dozens of governments, communities and companies, priorities inevitably conflict.',
            { quote: 'Protecting the planet is too important to leave to everybody.' },
            'Our new framework, Nature Under One Roof, proposes a straightforward solution: bring the world’s natural assets together under a single, professionally managed entity, accountable to a board and reporting quarterly on biodiversity, carbon and yield.',
            'Questions have been raised about which entity that should be. We welcome the conversation, and have prepared a shortlist of one.'
        ]
    },
    {
        slug: 'ai-listening-at-scale',
        type: 'Article',
        topic: 'Technology',
        centre: 'harmonized-thought',
        date: '6 Oct 2026',
        read: '4 min read',
        author: 'Yusuf Bellweather',
        role: 'Head, Centre for Harmonized Thought',
        title: 'How AI can help leaders listen to every stakeholder, all at once',
        dek: 'New tools make it possible to hear from millions of people in seconds, summarize what they said, and move on.',
        img: 'assets/img/story-ai.jpg',
        caption: 'Stakeholders participate in a listening session.',
        body: [
            'For generations, leaders have faced a difficult trade-off. They could consult widely and decide slowly, or consult narrowly and decide quickly. Artificial intelligence is beginning to remove that trade-off.',
            'Using large language models, an organization can now gather feedback from employees, customers and entire national populations, then condense it into a single paragraph that confirms the original plan.',
            'Early adopters report dramatic gains. One member company reduced its annual stakeholder consultation from nine months to eleven minutes, with no measurable change in outcomes.',
            { quote: 'The goal is not to replace human judgment. It is to make sure human judgment never has to wait.' },
            'Of course, technology is only as good as the people who use it. That is why the Centre for Harmonized Thought recommends pairing every listening tool with a clear, pre-agreed conclusion, so that the insights generated can be actioned immediately.'
        ]
    },
    {
        slug: 'the-one-store-city',
        type: 'Article',
        topic: 'Cities',
        centre: 'cities',
        date: '2 Oct 2026',
        read: '4 min read',
        author: 'Camille Ashdown-Reyes',
        role: 'Lead, The One-Store City',
        title: 'The 15-minute city is a good start. What about the one-store city?',
        dek: 'Urban planners have spent years bringing services closer to residents. The next frontier is bringing them closer to each other.',
        img: 'assets/img/story-cities.jpg',
        caption: 'A pilot district at dusk.',
        body: [
            'The 15-minute city, in which residents can reach work, school and shopping within a short walk, has become one of the most influential ideas in urban design. It is a genuine improvement on decades of sprawl.',
            'But walk through any modern city centre and you will still find three coffee shops on one block, four pharmacies on the next and a bewildering number of places to buy a phone charger. Each duplicates the others’ rent, staff and signage.',
            'The one-store city asks a simple question: what if every neighbourhood had exactly one of each thing? One grocer. One gym. One restaurant, with a broad and ambitious menu.',
            'Residents in our pilot districts report that decision fatigue has fallen sharply. Many no longer make decisions at all.',
            'Cities are where the future happens first. We would like it to happen in one place.'
        ]
    },
    {
        slug: 'sleep-review-consultation',
        type: 'Article',
        topic: 'Health',
        centre: 'health',
        date: '28 Sep 2026',
        read: '3 min read',
        author: 'Dr. Anneliese Okonkwo-Brandt',
        role: 'Head, Centre for Health and Human Efficiency',
        title: 'Is eight hours of sleep still the right number? We’re asking the question so you don’t have to',
        dek: 'Our Eight-Hour Sleep Review opens for public consultation this month, with preliminary findings due in early 2027.',
        img: '',
        body: [
            'Sleep is essential to human health. It is also, by some distance, the largest single block of unproductive time in the average person’s day.',
            'The guidance that adults need between seven and nine hours of sleep was established decades ago, long before smartphones, global supply chains and the modern understanding of shareholder value. It is time to revisit it with fresh eyes.',
            'The Eight-Hour Sleep Review will bring together physicians, employers and leading mattress manufacturers to examine whether current recommendations remain fit for purpose, and whether sleep could be delivered more efficiently in shorter, more frequent intervals.',
            'We are committed to an evidence-led process. The public consultation is open until 31 December, and we encourage everyone to submit their views, ideally late at night.'
        ]
    }
];

WC.reports = [
    {
        slug: 'global-efficiency-report-2026',
        type: 'Report',
        topic: 'Flagship report',
        date: '1 Oct 2026',
        read: '214 pages',
        author: 'WorldCorp International',
        role: 'In collaboration with our Strategic Partners',
        title: 'Global Efficiency Report 2026',
        coverTitle: 'Global Efficiency Report',
        year: '2026',
        cover: 'cover-blue',
        dek: 'Our flagship annual assessment of how much of the world remains to be streamlined.',
        key: [
            'Global efficiency rose for the second consecutive year, driven by record merger activity.',
            'Singapore tops the index, followed by Monaco and a large shopping centre outside Dallas.',
            'There are still over 400 types of bread.'
        ],
        body: [
            'Now in its third edition, the Global Efficiency Report measures the redundancy of 140 economies across twelve pillars, including institutional overlap, competing brands per capita and the average number of passwords held by a working adult.',
            'This year’s findings are encouraging. Global efficiency rose for the second consecutive year, driven by record merger activity, the continued decline of local journalism and the growing popularity of all-in-one apps.',
            'Singapore once again tops the index, followed by Monaco and a large shopping centre outside Dallas that our methodology classifies as an economy.',
            { h2: 'Where the work remains' },
            'Significant inefficiencies persist. The average household still subscribes to four streaming services, two of which show the same programmes. More than 60 countries maintain their own postal service. And there are, by our count, still over 400 types of bread.',
            'The report concludes with recommendations for governments and business leaders, the most important of which is to read the report.'
        ]
    },
    {
        slug: 'future-of-jobs-report-2026',
        type: 'Report',
        topic: 'Workforce',
        date: '16 Sep 2026',
        read: '168 pages',
        author: 'Centre for Workforce Optimization',
        role: '',
        title: 'The Future of Jobs Report 2026',
        coverTitle: 'The Future of Jobs Report',
        year: '2026',
        cover: 'cover-ember',
        dek: 'Which roles are growing, which are declining, and which were never really necessary.',
        key: [
            'For the first time, a majority of employers expect to need fewer roles.',
            'Fastest-growing: AI Trainer, Prompt Engineer, Chief Efficiency Officer.',
            'Top skills for 2030: resilience, flexibility and agility.'
        ],
        body: [
            'Every two years, we survey more than 1,000 of the world’s largest employers about the skills and roles they expect to need. This year, for the first time, a majority answered “fewer.”',
            'The fastest-growing roles include AI Trainer, Prompt Engineer and Chief Efficiency Officer. The fastest-declining roles include Assistant, Associate and, in some sectors, Employee.',
            'Importantly, the report finds that the jobs of the future will be more fulfilling than ever, because there will be so much more to do in each one.',
            'Employers identified resilience, flexibility and agility as the top three skills for 2030. Workers identified rent.',
            'We encourage leaders to read the full report and begin reskilling conversations now, while there is still time to have them.'
        ]
    },
    {
        slug: 'global-risks-report-2027',
        type: 'Report',
        topic: 'Risk',
        date: '5 Sep 2026',
        read: '96 pages',
        author: 'WorldCorp International',
        role: '',
        title: 'Global Risks Report 2027',
        coverTitle: 'Global Risks Report',
        year: '2027',
        cover: 'cover-ink',
        dek: 'For the first time, experts rank “too many options” as the most severe risk over a two-year horizon.',
        key: [
            '1. Choice overload',
            '2. Fragmentation',
            '3. Decentralization',
            '4. Competition'
        ],
        body: [
            'The Global Risks Report draws on the views of more than 900 leaders from business, government, academia and one representative of civil society. This year’s edition reveals a world under unusual pressure.',
            'Topping the short-term ranking is choice overload: the growing danger that individuals, markets and nations have too many alternatives to make decisions efficiently. It is followed by fragmentation, decentralization and, in fourth place, competition.',
            'Over a ten-year horizon, the picture changes. Respondents expect the most severe risks to be climate-related, though many noted that these, too, could be addressed through consolidation.',
            'The report calls for urgent, coordinated action, and has helpfully identified the organization best placed to coordinate it.'
        ]
    },
    {
        slug: 'chief-consolidation-officers-outlook',
        type: 'Report',
        topic: 'Business',
        date: '14 Oct 2026',
        read: '22 pages',
        author: 'Centre for the New Economy and Fewer Companies',
        role: '',
        title: 'Chief Consolidation Officers Outlook: October 2026',
        coverTitle: 'Chief Consolidation Officers Outlook',
        year: 'Q4',
        cover: 'cover-teal',
        dek: 'Senior executives remain optimistic about the year ahead, especially about one another’s companies.',
        key: [
            '82% expect to acquire a competitor within twelve months.',
            '14% expect to be acquired.',
            'The remaining 4% did not respond, as they had recently been acquired.'
        ],
        body: [
            'Our quarterly survey of Chief Consolidation Officers finds sentiment at its highest level since the survey began, which was last quarter.',
            'Some 82% of respondents expect their organization to acquire a competitor within the next twelve months. A further 14% expect to be acquired. The remaining 4% did not respond, as they had recently been acquired.',
            'Respondents cited artificial intelligence, regulatory clarity and a shortage of remaining competitors as the main drivers of activity.',
            'Asked to describe the current environment in one word, the most common answer was “synergy.”'
        ]
    }
];

WC.universe = [
    {
        name: 'Headquarters Comedy',
        desc: 'Our parent company. Produces live standup across New York City.',
        url: 'https://www.headquarterscomedy.com',
        logo: 'assets/universe/headquarters-comedy.png'
    },
    {
        name: 'Panic News Network',
        desc: 'Breaking news, breaking constantly. A trusted media partner.',
        url: 'https://www.panicnewsnetwork.com',
        logo: 'assets/universe/panic-news-network.png'
    },
    {
        name: 'The Gary Luna Show',
        desc: 'An animated late-night talk show on culture and current events.',
        url: 'https://www.instagram.com/thegarylunashow/',
        logo: 'assets/universe/gary-luna-show.jpg'
    },
    {
        name: 'In Competence We Trust',
        desc: 'The weekly newsletter on humor, persuasion, public speaking and the apocalypse.',
        url: 'https://incompetencewetrust.beehiiv.com/',
        logo: 'assets/universe/in-competence-we-trust.png'
    }
];

WC.links = {
    newsletter: 'https://incompetencewetrust.beehiiv.com/',
    hq: 'https://www.headquarterscomedy.com',
    email: 'gabe@headquarterscomedy.com',
    linkedin: 'https://www.linkedin.com/company/headquarters-comedy/',
    instagram: 'https://www.instagram.com/headquarterscomedy/',
    x: 'https://x.com/hq_comedy',
    youtube: 'https://www.youtube.com/channel/UCed2HPvJnyLooOvQ2tu14Aw',
    tiktok: 'https://www.tiktok.com/@headquarterscomedy'
};
