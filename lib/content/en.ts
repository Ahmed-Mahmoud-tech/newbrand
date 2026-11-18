/**
 * English copy for the marketing site. app/_site renders it; lib/content/ar.ts has the same shape.
 *
 * Rules for this copy: no invented clients, testimonials, statistics or certifications; concept
 * work is labelled as concept work; never promise sales results.
 */

const en = {
    meta: {
        homeTitle: 'Gateverse | Immersive Real Estate Experiences: 360° Tours, 3D Walkthroughs and Off-Plan Experiences',
        homeDescription:
            'Gateverse creates 360° virtual tours, 3D architectural walkthroughs, off-plan experiences, interactive showrooms and masterplans that help real estate developers present and market their projects.',
    },

    common: {
        requestProposal: 'Request a Custom Proposal',
        discussProject: 'Discuss Your Project',
        exploreExperiences: 'Explore Our Experiences',
        explorePortfolio: 'Explore Our Portfolio',
        requestConsultation: 'Request a Project Consultation',
        whatsapp: 'WhatsApp',
        whatsappCta: 'Message us on WhatsApp',
        email: 'Email',
        phone: 'Phone',
        learnMore: 'Learn more',
        viewSolution: 'View solution',
        home: 'Home',
        concept: 'Concept demonstration',
        cgRender: 'CG render: concept visual',
        capturedOnSite: 'Captured on site',
        openLiveTour: 'Open live tour',
        watchVideos: 'Watch walkthrough videos',
        skipToContent: 'Skip to content',
        opensNewTab: '(opens in a new tab)',
    },

    nav: {
        label: 'Main navigation',
        solutions: 'Solutions',
        portfolio: 'Portfolio',
        process: 'Process',
        about: 'About',
        contact: 'Contact',
        cta: 'Request a Proposal',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        switchLabel: 'العربية',
        switchTitle: 'اقرأ هذه الصفحة بالعربية',
    },

    viewer: {
        label: 'Interactive 360° concept apartment',
        hint: 'Drag to look around',
        hintTouch: 'Swipe to look around',
        loading: 'Loading 360° view…',
        fallback: 'Interactive view unavailable on this device. Showing a still image.',
        scenes: 'Rooms',
        fullscreen: 'Full screen',
        exitFullscreen: 'Exit full screen',
        zoomIn: 'Zoom in',
        zoomOut: 'Zoom out',
        note: 'Concept demonstration: a CG apartment rendered from a 3D model, not a client project.',
    },

    hero: {
        eyebrow: 'Gateverse · Immersive Real Estate Experiences',
        title: 'Experience real estate beyond boundaries.',
        lead: 'Gateverse creates immersive 360° and 3D real estate experiences that help developers showcase projects, present properties, and engage potential buyers from anywhere.',
        primary: 'Explore Our Experiences',
        secondary: 'Request a Project Consultation',
        facts: [
            { k: 'Completed properties', v: 'On-site 360° capture' },
            { k: 'Unbuilt projects', v: 'Render-based experiences' },
            { k: 'Every channel', v: 'One link, any device' },
        ],
    },

    positioning: {
        eyebrow: 'What we do',
        title: 'More than a virtual tour. A new way to experience real estate.',
        lead: 'Gateverse is a real estate experience studio. We turn properties, from completed units to projects still on the drawing board, into digital experiences that developers, marketing teams and sales teams can use every day.',
        points: [
            { title: 'Showcase properties remotely', text: 'Give buyers a clear sense of the space from wherever they are, before they book a visit.' },
            { title: 'Present off-plan projects more effectively', text: 'Turn plans and renders into something people can explore instead of imagine.' },
            { title: 'Improve the presentation experience', text: 'Replace scattered images and PDFs with one coherent, branded experience.' },
            { title: 'Help buyers explore before visiting', text: 'Let prospects understand layout, flow and finishes ahead of the site visit.' },
            { title: 'Support marketing and sales teams', text: 'One shareable link for campaigns, websites, WhatsApp follow-ups and sales meetings.' },
        ],
    },

    solutionsSection: {
        eyebrow: 'Our solutions',
        title: 'Experiences for every stage of a property, from plan to handover.',
        lead: 'Each solution is built around a specific job: presenting what exists, explaining what is planned, or connecting the whole development into one story.',
        all: 'All solutions',
    },

    solutions: [
        {
            slug: '360-virtual-tours',
            index: '01',
            title: '360° Virtual Property Tours',
            short: 'On-site 360° capture of completed apartments, villas, show units and commercial spaces, published as a navigable tour.',
            benefits: ['Remote viewing for serious buyers', 'Shareable link and website embed', 'Contact buttons inside the tour'],
            visual: 'circleOffice',
            visualCaption: 'Captured on site: The Circle, Alexandria',
            page: {
                metaTitle: '360° Virtual Property Tours for Real Estate',
                metaDescription:
                    'On-site 360° virtual tours for completed apartments, villas, show units and commercial properties, with shareable links, website embeds and in-tour contact buttons for developers and agencies.',
                eyebrow: 'Completed properties',
                heroTitle: '360° virtual property tours that let buyers walk the space before they visit.',
                heroLead:
                    'We capture completed properties on site and publish them as navigable 360° tours, ready to share with buyers, embed on your website and use in campaigns and sales meetings.',
                overviewTitle: 'The property, as it really is, on any screen.',
                overview: [
                    'Photos show rooms. A 360° tour shows how the rooms connect, how light falls and how the space feels to move through. Buyers can return to it as often as they need, and arrive at a visit already understanding the property.',
                    'Every tour is published on a permanent link with an embed code, so the same experience works on your website, a property portal, social media and a WhatsApp conversation with a prospect.',
                ],
                useCasesTitle: 'Where developers and agencies use it',
                useCases: [
                    { title: 'Show apartments and model units', text: 'Keep the show unit open around the clock for buyers who cannot visit in person.' },
                    { title: 'Ready-to-move inventory', text: 'Present completed units individually so each listing can be explored on its own link.' },
                    { title: 'Commercial and retail units', text: 'Let tenants and investors assess layout, frontage and fit-out before a site meeting.' },
                    { title: 'Amenities and common areas', text: 'Lobbies, clubhouses, gyms and landscaped areas shown as part of the project story.' },
                ],
                benefitsTitle: 'What it gives your team',
                benefits: [
                    { title: 'Better-informed visits', text: 'Prospects who have already explored the property arrive with clearer questions.' },
                    { title: 'One link for every channel', text: 'Website, portals, campaigns and messaging all point to the same experience.' },
                    { title: 'Actions inside the tour', text: 'WhatsApp, call and website buttons let a viewer contact your team without leaving the tour.' },
                    { title: 'Engagement you can see', text: 'A private statistics page shows views, button taps and which information points were opened.' },
                ],
                deliverablesTitle: 'What you receive',
                deliverables: [
                    'Navigable 360° tour of the property',
                    'Permanent share link and embed code',
                    'Optional information points: finishes, specifications, images or video',
                    'Contact buttons configured for your sales team',
                    'Private statistics page for the tour',
                    'Hosting on the Gateverse tour platform',
                ],
                inputsTitle: 'What we need from you',
                inputs: [
                    'Access to the property for a capture session',
                    'The contact details and branding to show in the tour',
                    'Any specifications or features you want highlighted',
                ],
                faqs: [
                    { q: 'How long does the on-site capture take?', a: 'A typical apartment or unit takes one to two hours on site. Larger properties and multi-unit projects are scheduled per project.' },
                    { q: 'When is the tour delivered?', a: 'Standard tours are delivered within 48 hours of the capture session. Projects with many units or custom interactive content follow the timeline agreed in the proposal.' },
                    { q: 'Can we embed the tour on our website or a property portal?', a: 'Yes. Every tour comes with an embed code and a direct link. It runs in the browser on phones, tablets and computers, with no app to install.' },
                    { q: 'Where do you capture?', a: 'On-site capture is based in Alexandria, Egypt. Capture in other cities and countries can be discussed per project.' },
                    { q: 'Is there an option for a single completed unit?', a: 'Yes. For individual completed spaces we offer fixed entry-level packages based on area. See the entry-level 360° packages page.' },
                ],
                ctaTitle: 'Planning tours for a completed project?',
                ctaText: 'Tell us how many units, amenities and common areas you want to present, and we will propose a capture plan.',
            },
        },
        {
            slug: '3d-walkthroughs',
            index: '02',
            title: '3D Architectural Walkthroughs',
            short: 'Guided and interactive walkthroughs built from your architectural models and plans, so people understand space before construction.',
            benefits: ['Built from your design files', 'Video, stills and 360° from one scene', 'Ready for launches and investor decks'],
            visual: 'conceptOverview',
            visualCaption: 'CG render: concept visual',
            page: {
                metaTitle: '3D Architectural Walkthroughs for Real Estate Projects',
                metaDescription:
                    '3D architectural walkthroughs built from your models and plans: guided walkthrough videos, interactive 360° viewpoints and stills for launches, investor presentations and sales centres.',
                eyebrow: 'Architectural visualisation',
                heroTitle: '3D architectural walkthroughs that turn plans and models into spaces people understand.',
                heroLead:
                    'We turn architectural models, plans and design intent into guided and interactive 3D walkthroughs, so buyers, investors and stakeholders can understand scale, flow and finishes before construction.',
                overviewTitle: 'From drawings to a space people can read.',
                overview: [
                    'Most buyers and many stakeholders cannot read a plan. A walkthrough shows them the sequence of spaces, the proportions of each room and the relationship between inside and out, in a format that needs no explanation.',
                    'Because everything is produced from one 3D scene, the same work yields a cinematic walkthrough video, interactive 360° viewpoints and still renders, all consistent with each other and with your design.',
                ],
                useCasesTitle: 'Where it is used',
                useCases: [
                    { title: 'Launch and pre-sales campaigns', text: 'Lead the campaign with a walkthrough that shows the product before the first slab is poured.' },
                    { title: 'Investor and partner presentations', text: 'Explain the scheme clearly to people who need to commit before it exists.' },
                    { title: 'Design review', text: 'Walk through the design with your architect and client to align on spaces and finishes.' },
                    { title: 'Sales centres and events', text: 'Run the walkthrough on large screens alongside the physical model.' },
                ],
                benefitsTitle: 'Why developers commission walkthroughs',
                benefits: [
                    { title: 'Clearer than static renders', text: 'Movement explains layout and scale in a way single images cannot.' },
                    { title: 'One consistent story', text: 'Every channel uses visuals generated from the same scene.' },
                    { title: 'Built on your design', text: 'Produced from your architect\'s models and drawings, not from generic stock.' },
                    { title: 'Reusable assets', text: 'Video for campaigns, 360° for the website, stills for brochures and portals.' },
                ],
                deliverablesTitle: 'Typical deliverables',
                deliverables: [
                    'Guided walkthrough video along an agreed camera path',
                    'Interactive 360° viewpoints rendered from the model',
                    'Still renders from the same scene',
                    'Web and social formats for campaigns',
                ],
                inputsTitle: 'What we work from',
                inputs: [
                    'Your 3D model (common exports such as FBX, OBJ, SketchUp or Revit) or CAD plans and elevations',
                    'Material and finish schedules, mood boards or interior design references',
                    'Brand guidelines and the key messages for the project',
                ],
                faqs: [
                    { q: 'We only have 2D plans. Can you still create a walkthrough?', a: 'Yes. We can build the 3D scene from plans and elevations. The scope and timeline depend on the level of interior and exterior detail required.' },
                    { q: 'How long does a walkthrough take?', a: 'It depends on the size of the project and the level of detail. We give you a timeline in the proposal after reviewing your files.' },
                    { q: 'Can we use the walkthrough in ads and on social media?', a: 'Yes. Deliverables are exported in the formats you need for your website, campaigns and social channels.' },
                    { q: 'How do revisions work?', a: 'The number of review rounds is agreed in the proposal. We review the camera path and key views with you before final production.' },
                ],
                ctaTitle: 'Have models or plans ready?',
                ctaText: 'Send us an overview of the project and the files you have, and we will recommend the right combination of video, 360° and stills.',
            },
        },
        {
            slug: 'off-plan-experiences',
            index: '03',
            title: 'Off-Plan Project Experiences',
            short: 'Render-based 360° experiences of units, amenities and views for projects that are still on paper or under construction.',
            benefits: ['Explore units before they exist', 'Present every unit type consistently', 'Evolves into the completed-property tour'],
            visual: 'conceptLiving',
            visualCaption: 'Concept demonstration: CG apartment',
            page: {
                metaTitle: 'Off-Plan Property Virtual Tours and Experiences',
                metaDescription:
                    'Off-plan property experiences: render-based 360° tours of units, amenities and views that help developers present projects before they are built, on any device.',
                eyebrow: 'Unbuilt and under-construction projects',
                heroTitle: 'Your properties. Experienced before they\'re built.',
                heroLead:
                    'For projects still on paper or under construction, we create render-based 360° experiences of units, amenities and views, giving buyers something they can explore, not just imagine.',
                overviewTitle: 'Off-plan buyers decide on what they can picture.',
                overview: [
                    'When a property does not exist yet, buyers rely on brochures, renders and the sales team\'s explanation. An off-plan experience turns the design into navigable 360° spaces: they can stand in the living room, look towards the balcony and move into the bedroom.',
                    'The experience is produced from your design documents and can be presented on your website, in the sales centre or in a remote conversation. Once the project is complete, it can be followed by an on-site 360° tour of the finished units.',
                ],
                useCasesTitle: 'Where it fits',
                useCases: [
                    { title: 'Launches and pre-sales', text: 'Give the launch a product people can explore on day one.' },
                    { title: 'Unit type showcases', text: 'Present each typology, from one-bedroom units to penthouses, in the same clear format.' },
                    { title: 'Amenity previews', text: 'Show the clubhouse, pool deck or lobby that buyers are paying for.' },
                    { title: 'Remote and international buyers', text: 'Support conversations with buyers who cannot visit the sales centre.' },
                ],
                benefitsTitle: 'What it changes for the sales conversation',
                benefits: [
                    { title: 'Layout and scale, understood', text: 'Buyers see how rooms relate to each other instead of reading dimensions.' },
                    { title: 'Consistent presentation', text: 'Every salesperson presents the same experience, in the same way.' },
                    { title: 'Remote-ready', text: 'Share the experience by link and walk through it together on a call.' },
                    { title: 'A path to handover', text: 'The same project can later be captured on site as a completed-property tour.' },
                ],
                deliverablesTitle: 'What an off-plan experience can include',
                deliverables: [
                    'Render-based 360° scenes per unit type or amenity',
                    'Room-to-room navigation and a scene menu',
                    'Information points for finishes, specifications and links to your brochure',
                    'Contact buttons and a shareable link with embed code',
                    'Still renders from the same scenes',
                ],
                inputsTitle: 'What we need from you',
                inputs: [
                    'Architectural plans and sections for the units to present',
                    'Interior design, finish schedules or reference images',
                    'Existing 3D models or renders, if available',
                    'The unit mix and amenities you want to prioritise',
                ],
                faqs: [
                    { q: 'How close will the experience be to the final building?', a: 'It is produced from the design documents you provide. As with all off-plan marketing material, we recommend presenting it with a note that visuals are illustrative and may differ from the delivered property.' },
                    { q: 'Can the experience be updated if the design changes?', a: 'Yes. Updates are scoped according to what changes, for example a finish option or a revised layout.' },
                    { q: 'Do buyers need an app or headset?', a: 'No. The experience opens in the browser on phones, tablets and computers.' },
                    { q: 'Can you show an example?', a: 'Yes. Our portfolio includes an interactive concept apartment rendered from a 3D model, clearly labelled as a concept demonstration.' },
                ],
                ctaTitle: 'Launching an off-plan project?',
                ctaText: 'Tell us about the project, its unit types and launch timeline, and we will propose an experience that fits your campaign.',
            },
        },
        {
            slug: 'interactive-showrooms',
            index: '04',
            title: 'Interactive Property Showrooms',
            short: 'A digital showroom for units, specifications and finishing options, usable in the sales centre, in meetings or by buyers at home.',
            benefits: ['The full offer in one place', 'Specifications at the point of interest', 'Works on any screen'],
            visual: 'conceptKitchen',
            visualCaption: 'CG render: concept visual',
            page: {
                metaTitle: 'Interactive Real Estate Digital Showrooms',
                metaDescription:
                    'Interactive property showrooms that bring units, specifications and finishing options into one digital space for sales centres, client meetings and remote buyers.',
                eyebrow: 'Digital sales tools',
                heroTitle: 'Interactive property showrooms for presenting units, finishes and options.',
                heroLead:
                    'A digital showroom brings your units, specifications and finishing options into one interactive space, usable on a sales-centre screen, in a client meeting or by a buyer at home.',
                overviewTitle: 'The show unit, the spec sheet and the options, together.',
                overview: [
                    'Buyers ask the same questions in every meeting: what is the kitchen made of, which finishing package is this, what changes in the larger unit. A digital showroom answers them inside the space itself, with information points placed exactly where the question arises.',
                    'It can be built from an existing show unit captured on site or rendered from your design files, and it runs in the browser on anything from a phone to a large touch display.',
                ],
                useCasesTitle: 'Where it is used',
                useCases: [
                    { title: 'Virtual sales centre', text: 'Offer the showroom online to buyers who have not visited yet.' },
                    { title: 'Finishing packages and options', text: 'Present material and finishing choices side by side, in context.' },
                    { title: 'Model unit presentations', text: 'Extend the life of a show unit beyond the period it physically exists.' },
                    { title: 'Exhibitions and property shows', text: 'Present the project at events without shipping a physical mock-up.' },
                ],
                benefitsTitle: 'Why it works for sales teams',
                benefits: [
                    { title: 'One place for the full offer', text: 'Units, finishes and amenities in a single experience instead of separate files.' },
                    { title: 'Answers in context', text: 'Specifications, images, video and documents attached to the exact spot in the room.' },
                    { title: 'Same presentation, every time', text: 'Each salesperson tells the project story consistently.' },
                    { title: 'Any screen', text: 'Phone, laptop, sales-centre display or touch screen.' },
                ],
                deliverablesTitle: 'What a showroom can include',
                deliverables: [
                    '360° scenes captured on site or rendered from design files',
                    'Information points with specifications, images, video and links',
                    'Navigation between units, rooms and finishing options',
                    'Your branding and contact actions',
                    'Engagement statistics for the experience',
                ],
                inputsTitle: 'What we need from you',
                inputs: [
                    'Access to the show unit, or the design files for the units to present',
                    'Specifications, finish schedules and option lists',
                    'Brand assets and the documents you want linked',
                ],
                faqs: [
                    { q: 'Do we need a physical show unit?', a: 'No. A showroom can be captured from an existing show unit or rendered entirely from your design files.' },
                    { q: 'Can it present different finishing packages?', a: 'Yes, as separate scenes or as information points. The scope depends on the number of options and units.' },
                    { q: 'Will it run on a touch screen in our sales centre?', a: 'It runs in a web browser, so it works on large displays and touch screens. We confirm the hardware with you during discovery.' },
                    { q: 'Can we see how buyers use it?', a: 'Yes. A private statistics page shows views, contact-button taps and which information points were opened.' },
                ],
                ctaTitle: 'Want a showroom that works beyond the sales centre?',
                ctaText: 'Share your unit types and finishing options, and we will outline how the showroom could be structured.',
            },
        },
        {
            slug: 'interactive-masterplans',
            index: '05',
            title: 'Interactive Masterplans',
            short: 'Masterplans turned into interactive maps of phases, buildings and amenities, connected to the experiences behind them.',
            benefits: ['Shows the scale of the development', 'Links masterplan to unit experiences', 'Simplifies multi-phase sales'],
            visual: 'masterplan',
            visualCaption: 'Illustrative interface',
            page: {
                metaTitle: 'Interactive Masterplans for Real Estate Developments',
                metaDescription:
                    'Interactive masterplans for compounds and mixed-use developments: explore phases, buildings, amenities and unit types, and open the 360° and off-plan experiences behind them.',
                eyebrow: 'Developments and communities',
                heroTitle: 'Interactive masterplans that make a whole development easy to explore.',
                heroLead:
                    'We turn masterplans into interactive maps where buyers and sales teams can explore phases, buildings, amenities and unit types, and open the experiences behind them.',
                overviewTitle: 'The big picture, and a way into every detail.',
                overview: [
                    'A large development is hard to explain from a printed masterplan. An interactive masterplan lets people see where phases, buildings, amenities and access points are, then select a zone to learn more.',
                    'Each building or amenity can link to its own experience: an off-plan 360° unit, a walkthrough video or an on-site tour once completed, so the masterplan becomes the entrance to the whole project.',
                ],
                useCasesTitle: 'Where it fits',
                useCases: [
                    { title: 'Multi-phase compounds', text: 'Show what is launched, what is next and how phases relate.' },
                    { title: 'Mixed-use developments', text: 'Separate residential, retail, office and leisure components clearly.' },
                    { title: 'Resort and hospitality communities', text: 'Present villas, hotel and shared amenities as one destination.' },
                    { title: 'Sales-centre presentations', text: 'Use the masterplan as the starting point of every sales conversation.' },
                ],
                benefitsTitle: 'What it gives your project',
                benefits: [
                    { title: 'Scale and structure at a glance', text: 'Buyers understand the development before they focus on a unit.' },
                    { title: 'Every experience connected', text: 'Masterplan to building to unit, in a few taps.' },
                    { title: 'Simpler sales conversations', text: 'Point to a zone instead of describing it.' },
                    { title: 'Consistent across phases', text: 'New phases are added to the same experience as they launch.' },
                ],
                deliverablesTitle: 'What a masterplan experience can include',
                deliverables: [
                    'Interactive masterplan with phases, zones and buildings',
                    'Points for amenities, landmarks and access',
                    'Links into 360°, off-plan and walkthrough experiences',
                    'Optional availability display based on information you provide',
                    'Mobile-ready interface with share link and embed code',
                ],
                inputsTitle: 'What we need from you',
                inputs: [
                    'Masterplan drawings (CAD or PDF) and phasing',
                    'Amenity list, unit types and the information to show per zone',
                    'Renders, brand assets and any existing experiences to link',
                ],
                faqs: [
                    { q: 'Can the masterplan show unit availability?', a: 'Yes. It can display availability using information you provide. A live connection to a sales or inventory system would be scoped separately.' },
                    { q: 'Can we add phases later?', a: 'Yes. The masterplan is structured so new phases and buildings can be added as they launch.' },
                    { q: 'Can it link to unit tours?', a: 'Yes. Any zone, building or amenity can open a 360° tour, an off-plan experience or a walkthrough video.' },
                    { q: 'Can the interface be bilingual?', a: 'Yes. Labels and information can be provided in English and Arabic.' },
                ],
                ctaTitle: 'Presenting a multi-phase development?',
                ctaText: 'Send us the masterplan and the story you want it to tell, and we will propose the right structure.',
            },
        },
        {
            slug: 'digital-presentations',
            index: '06',
            title: 'Digital Property Presentations',
            short: 'Presentation-ready packages of walkthrough video, stills and interactive links for sales decks, websites and campaigns.',
            benefits: ['Ready for sales meetings', 'Consistent with every experience', 'Formatted for each channel'],
            visual: 'conceptDining',
            visualCaption: 'CG render: concept visual',
            page: null,
        },
    ],

    projectsSection: {
        eyebrow: 'Featured work',
        title: 'Live experiences and concept demonstrations.',
        lead: 'Live tours of completed commercial spaces we captured on site, and an interactive concept that shows how an unbuilt residential unit can be presented.',
        category: 'Category',
        experience: 'Experience',
        viewAll: 'View the full portfolio',
    },

    audiences: {
        eyebrow: 'Who we work with',
        title: 'Built for the people who develop, market and sell property.',
        lead: 'The same experience serves different goals depending on who uses it. Here is how each partner typically puts it to work.',
        items: [
            { title: 'Real estate developers', text: 'Present projects consistently from launch to handover, across every channel and sales team.' },
            { title: 'Property marketing companies', text: 'Add immersive content to campaigns, landing pages and listings you manage for developers.' },
            { title: 'Architecture and design studios', text: 'Communicate design intent to clients and stakeholders as spaces they can explore.' },
            { title: 'Residential developers', text: 'Help families understand layouts, unit types and amenities before they visit or commit.' },
            { title: 'Commercial property developers', text: 'Show offices, retail and mixed-use space to tenants and investors who compare many options.' },
            { title: 'Luxury property companies', text: 'Match the standard of the property with a presentation that feels just as considered.' },
        ],
    },

    process: {
        eyebrow: 'How it works',
        title: 'A clear production workflow, from first call to launch.',
        lead: 'Every project follows the same five steps, with agreed deliverables and review points.',
        steps: [
            { n: '01', title: 'Discovery', text: 'Understand the property, project, and marketing objectives.' },
            { n: '02', title: 'Content Collection', text: 'Collect photography, 360° captures, architectural plans, or 3D renders.' },
            { n: '03', title: 'Experience Production', text: 'Build the immersive digital experience.' },
            { n: '04', title: 'Review & Refinement', text: 'Review the project with the client and apply agreed revisions.' },
            { n: '05', title: 'Launch', text: 'Deliver a shareable digital experience ready for websites, campaigns, and sales presentations.' },
        ],
    },

    why: {
        eyebrow: 'Why Gateverse',
        title: 'One partner for completed and unbuilt properties.',
        lead: 'We combine on-site capture and render-based production, so a project can be presented the same way from its first launch to its final handover.',
        items: [
            { title: 'Multiple production capabilities', text: '360° capture, 3D walkthroughs and architectural visualisation under one roof.' },
            { title: 'Completed and unbuilt properties', text: 'On-site tours for what exists; render-based experiences for what is still being built.' },
            { title: 'Custom branding and interactivity', text: 'Your identity, your contact actions and information points placed where they matter.' },
            { title: 'Accessible on every device', text: 'Runs in the browser on phones, tablets, computers and large displays. No app required.' },
            { title: 'Project-specific solutions', text: 'Scoped around your project and goals, not a fixed template.' },
            { title: 'Professional production workflow', text: 'Discovery, production and review steps agreed in advance, with clear deliverables.' },
        ],
    },

    pricingNote: {
        eyebrow: 'Engagement',
        title: 'Scoped to your project, not to a price list.',
        text: 'Every property is different. Our solutions are customized according to project scale, content requirements, and interactive features.',
        cta: 'Request a Custom Proposal',
        entry: 'Need a single completed unit captured? See entry-level 360° packages',
    },

    cta: {
        title: 'Let\'s make your next project an experience.',
        text: 'Whether you\'re launching a new development or showcasing an existing property, Gateverse can help you create a more immersive way to present it.',
        primary: 'Discuss Your Project',
        secondary: 'Explore Our Portfolio',
    },

    footer: {
        description: 'Gateverse creates immersive 360° and 3D experiences that help real estate developers showcase, present and market their projects.',
        solutions: 'Solutions',
        company: 'Company',
        contact: 'Contact',
        entryPackages: 'Entry-level 360° packages',
        follow: 'Follow Gateverse',
        based: 'Based in Alexandria, Egypt',
        rights: 'All rights reserved.',
        credit: 'Concept apartment visuals are based on "Apartamento" by SrMonteiro, licensed under CC BY 4.0.',
    },

    solutionPage: {
        breadcrumb: 'Solutions',
        overview: 'Overview',
        workflowTitle: 'How the project runs',
        faqTitle: 'Frequently asked questions',
        related: 'Related solutions',
        conceptCta: 'See the interactive concept apartment',
        entryCta: 'See entry-level 360° packages',
    },

    solutionsIndex: {
        metaTitle: 'Real Estate Experience Solutions',
        metaDescription:
            'Real estate experience solutions from Gateverse: 360° virtual property tours, 3D architectural walkthroughs, off-plan experiences, interactive showrooms, masterplans and digital presentations.',
        eyebrow: 'Solutions',
        title: 'Solutions for presenting real estate, built and unbuilt.',
        lead: 'Choose a single solution or combine them into one project experience, from the masterplan down to the individual unit.',
    },

    portfolioPage: {
        metaTitle: 'Portfolio: Live Tours and Concept Demonstrations',
        metaDescription:
            'Gateverse portfolio: live 360° tours of completed spaces captured in Alexandria, and an interactive concept apartment that demonstrates render-based off-plan experiences.',
        eyebrow: 'Portfolio',
        title: 'Live experiences and concept demonstrations.',
        lead: 'Open a live tour and move through the space yourself, or explore the concept apartment to see how an unbuilt unit can be presented.',
        conceptTitle: 'Concept apartment: render-based 360° experience',
        conceptText:
            'This apartment does not exist. It was rendered room by room from a 3D model and presented as a navigable 360° experience, the format we use for off-plan units. It is a concept demonstration, not a client project.',
        liveTitle: 'Completed spaces captured on site',
        liveText: 'These tours are live on our platform. They are commercial interiors in Alexandria, shown here as examples of on-site 360° capture.',
        honesty: 'We show only work we produced. Concept demonstrations are always labelled as such.',
    },

    aboutPage: {
        metaTitle: 'About Gateverse',
        metaDescription:
            'Gateverse is a real estate experience studio based in Alexandria, Egypt, creating 360° tours, 3D walkthroughs and off-plan experiences for developers and their marketing teams.',
        eyebrow: 'About',
        title: 'A real estate experience studio, built around how buyers decide.',
        intro: [
            'Gateverse creates immersive digital experiences for real estate: 360° tours captured on site for completed properties, and render-based experiences for projects that are still being designed or built.',
            'We began by capturing and publishing 360° tours of completed spaces in Alexandria, on our own tour platform with in-tour contact buttons and engagement statistics. Today we apply the same approach to the needs of developers: presenting a project clearly at every stage, on every channel.',
        ],
        principlesTitle: 'How we work',
        principles: [
            { title: 'Honest presentation', text: 'Experiences reflect the property or the design documents. Concept visuals are labelled as concepts.' },
            { title: 'Made for sales and marketing', text: 'Every experience is designed to be shared, embedded and used in real conversations with buyers.' },
            { title: 'Scoped to the project', text: 'We recommend what the project needs, and we say so when a simpler solution is enough.' },
            { title: 'Accessible anywhere', text: 'Browser-based experiences that work on phones, tablets, computers and large screens.' },
        ],
        whereTitle: 'Where we work',
        whereText:
            'We are based in Alexandria, Egypt, where we carry out on-site capture. Render-based work, such as off-plan experiences, 3D walkthroughs and interactive masterplans, is produced from your project files and can serve developers in Egypt, Saudi Arabia, the United Arab Emirates and beyond.',
    },

    pricingPage: {
        metaTitle: 'Entry-Level 360° Tour Packages for Completed Spaces',
        metaDescription:
            'Fixed entry-level 360° virtual tour packages for single completed units and spaces in Alexandria, priced by area. Larger projects and interactive experiences are quoted per project.',
        eyebrow: 'Entry-level 360° capture',
        title: 'Entry-level 360° tours for single completed spaces.',
        lead: 'For one completed unit or space that needs a clean, shareable 360° tour. Developments, off-plan experiences and interactive solutions are scoped and quoted per project.',
        projectsTitle: 'Presenting a development rather than a single unit?',
        projectsText: 'Every property is different. Our solutions are customized according to project scale, content requirements, and interactive features.',
        upTo: 'Up to',
        sqm: 'm²',
        currency: 'EGP',
        popular: 'Most requested',
        book: 'Book on WhatsApp',
        included: 'Included',
        notIncluded: 'Not included',
        features: {
            tour: 'Full 360° tour of the space',
            link: 'Share link and website embed code',
            hosting: (m: number) => `${m} ${m === 1 ? 'month' : 'months'} of hosting included`,
            info: 'Information points inside the tour',
            priority: 'Priority scheduling',
        },
        hostingNote: (monthly: string, yearly: string, from: string) =>
            `After the included hosting period, the tour stays online for ${monthly} EGP per month or ${yearly} EGP per year. Spaces larger than ${from} m² are quoted individually.`,
        addonsTitle: 'Add-ons',
        addonUnit: 'EGP',
        addonPercent: 'of the package price',
        coverage: 'On-site capture in Alexandria, Sunday to Thursday, 9:00 to 18:00.',
        packages: {
            starter: { name: 'Starter', tagline: 'Studio or compact unit' },
            bronze: { name: 'Bronze', tagline: 'Apartment or small office' },
            silver: { name: 'Silver', tagline: 'Duplex, large apartment or showroom' },
            gold: { name: 'Gold', tagline: 'Villa or large space' },
        } as Record<string, { name: string; tagline: string }>,
        addons: ['Interactive point (pop-up): image, video or product details, per point', 'Still photograph', 'Short promotional video for social media', 'Additional floor', 'Tour update if the space changes'],
        bookMessage: (pkg: string, area: number) =>
            `Hello Gateverse, I'd like to book the ${pkg} 360° package (up to ${area} m²).\n\nProperty type: \nLocation: `,
    },

    contactPage: {
        metaTitle: 'Request a Proposal',
        metaDescription:
            'Request a custom proposal for a 360° tour, 3D walkthrough, off-plan experience, interactive showroom or masterplan. Tell Gateverse about your real estate project.',
        eyebrow: 'Contact',
        title: 'Tell us about your project.',
        lead: 'Share a few details and we will come back with the right approach and a custom proposal. Prefer to talk first? Message us on WhatsApp.',
        directTitle: 'Talk to us directly',
        basedTitle: 'Based in',
        hoursTitle: 'Working hours',
        hours: 'Sunday to Thursday, 9:00 to 18:00 (Cairo time)',
    },

    form: {
        title: 'Project inquiry',
        required: 'Required',
        optional: 'Optional',
        name: 'Full name',
        company: 'Company name',
        email: 'Work email',
        phone: 'Phone / WhatsApp',
        phoneHint: 'Include the country code, for example +20 or +966.',
        projectType: 'Project type',
        location: 'Project location',
        locationHint: 'City and country',
        status: 'Project status',
        service: 'Required service',
        details: 'Additional project details',
        detailsHint: 'Number of units, unit types, launch date, or anything else that helps us prepare.',
        select: 'Select…',
        submit: 'Send inquiry',
        sending: 'Sending…',
        privacy: 'We use these details only to respond to your inquiry.',
        projectTypes: [
            ['residential', 'Residential development'],
            ['commercial', 'Commercial development'],
            ['mixed-use', 'Mixed-use development'],
            ['luxury-residence', 'Villa or luxury residence'],
            ['hospitality', 'Hospitality or resort project'],
            ['single-unit', 'Single property or unit'],
            ['other', 'Other'],
        ],
        statuses: [
            ['planning', 'Planning or design stage'],
            ['off-plan', 'Off-plan (pre-launch or launched)'],
            ['under-construction', 'Under construction'],
            ['completed', 'Completed / ready to move'],
        ],
        services: [
            ['360-virtual-tours', '360° Virtual Property Tours'],
            ['3d-walkthroughs', '3D Architectural Walkthroughs'],
            ['off-plan-experiences', 'Off-Plan Project Experiences'],
            ['interactive-showrooms', 'Interactive Property Showrooms'],
            ['interactive-masterplans', 'Interactive Masterplans'],
            ['digital-presentations', 'Digital Property Presentations'],
            ['not-sure', 'Not sure yet: please advise'],
        ],
        errors: {
            required: 'Please fill in this field.',
            email: 'Please enter a valid email address.',
            phone: 'Please enter a valid phone number, including the country code.',
            fix: 'Please check the highlighted fields.',
            rate: 'Too many attempts. Please wait a few minutes, or contact us on WhatsApp.',
            server: 'Your inquiry could not be sent right now. Nothing was lost: you can send the same details on WhatsApp or by email below.',
        },
        successTitle: 'Thank you. Your inquiry has been received.',
        /** {ref} is replaced with the inquiry reference. */
        successText: 'Reference {ref}. We will review your project details and contact you using the details you provided.',
        successWhatsapp: 'Want a faster reply? Send the same details on WhatsApp.',
        sendWhatsapp: 'Send on WhatsApp',
        sendEmail: 'Send by email',
        another: 'Send another inquiry',
        summaryIntro: 'Hello Gateverse, I would like to discuss an immersive experience for my real estate project.',
    },

    notFound: {
        title: 'Page not found',
        text: 'The page you are looking for does not exist or has moved.',
        home: 'Back to the homepage',
    },
}

export type Dict = typeof en
export default en
