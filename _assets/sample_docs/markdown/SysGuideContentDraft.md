# SwipeSense System Guide

# Table of Contents

[SwipeSense System Guide
[0](#swipesense-system-guide)](#swipesense-system-guide)

[Introduction to SwipeSense
[1](#introduction-to-swipesense)](#introduction-to-swipesense)

[SwipeSense’s Approach to Behavioral Change
[1](#swipesenses-approach-to-behavioral-change)](#swipesenses-approach-to-behavioral-change)

[Technology Overview [2](#technology-overview)](#technology-overview)

[Caregiver Badge Reel [3](#caregiver-badge-reel)](#caregiver-badge-reel)

[Entry Sensor [3](#entry-sensor)](#entry-sensor)

[Hygiene Sensor [3](#hygiene-sensor)](#hygiene-sensor)

[Location Hub [4](#location-hub)](#location-hub)

[Communication Hub [4](#communication-hub)](#communication-hub)

[System Overview [4](#system-overview)](#system-overview)

[How Does a Hand Hygiene Event Get Created?
[4](#how-does-a-hand-hygiene-event-get-created)](#how-does-a-hand-hygiene-event-get-created)

[The Care Application [6](#the-care-application)](#the-care-application)

[The Hub Application [6](#the-hub-application)](#the-hub-application)

[How To Guides [7](#how-to-guides)](#how-to-guides)

[Activating Access [7](#activating-access)](#activating-access)

[User Considerations [7](#user-consideration)](#user-consideration)

[Manual User Management
[7](#manual-user-management)](#manual-user-management)

[Assigning Badge Reels
[8](#assigning-badge-reels)](#assigning-badge-reels)

[Managing Badges [9](#managing-badges)](#managing-badges)

[Using the Group/Vital Signs Dashboard
[9](#busing-the-groupvital-signs-dashboard)](#busing-the-groupvital-signs-dashboard)

[Using the Real-Time Intervention Blueprint
[10](#using-the-real-time-intervention-blueprint)](#using-the-real-time-intervention-blueprint)

[Contacting Support [11](#contacting-support)](#contacting-support)

## 

## 

## Introduction to SwipeSense

Welcome to SwipeSense and thank you for choosing to partner with us in
our mission to empower hospitals to make data-driven changes that lead
to predictable outcomes to help:

<img src="./_assets/attachments/$file/media/image1.png"
style="width:6.5in;height:2.09167in"
alt="A blue circle with white hands in a circle with text Description automatically generated" />

This System guide aims to offer a general overview on how our system
operates and provide instruction on how to navigate and manage The
SwipeSense Hub application. If you’re interested in learning more about
the SwipeSense system please see our other resources:

Technical Primer Link

Dashboard User Guide Link

Other System Guides As Available. (Or Build them into this one)

## SwipeSense’s Approach to Behavioral Change

Culture change powered by technology is the key to delivering safe, high
quality health care. We leverage our cloud-based sensor network to
provide complete transparency into hand hygiene data for every level of
an organization. Our data can be aggregated to span Multi-facility
Hospital Networks, all the way down to Groups, Units, Rooms, or
individuals.

Our philosophy doesn’t stop at merely providing the data, our team is
available to you from day 1, guiding your staff through a systematic,
six phase process that assists with onboarding, establishes baselines,
and goals, and drives engagement with the platform.

-   **Phase 1:** Setting the Foundation

-   **Phase 2:** Listen & Respond

-   **Phase 3:** Team Engagement

-   **Phase 4:** Challenge Yourself

-   **Phase 5:** Workflow Process Enhancement

-   **Phase 6:** Custom Initiative

Upon the completion of these phases our Partner Success and Support
teams will remain available for additional consulting on behavioral
coaching, maintenance, and improvement plans.

## Technology Overview

The SwipeSense Hardware System for Hand Hygiene is comprised of five
components that work together to collect data and relay this information
back to our cloud servers for processing and dashboard displays.

<img src="./_assets/attachments/$file/media/image2.png"
style="width:5.40237in;height:3.5in"
alt="A graphic of a medical device Description automatically generated with medium confidence" />

### Caregiver Badge Reel

<img src="./_assets/attachments/$file/media/image3.png"
style="width:1.98252in;height:1.44262in"
alt="A white rectangular object with a purple circle on it Description automatically generated" />Our
Caregiver Badge Reels replace existing clinician reels. These devices
use Bluetooth to communicate a unique identifier to our other sensors.
This allows us to give Hand Hygiene credit to each individual clinician.
Specifically designed with a clinician workflow in mind, it is intended
to be a “wear and forget” technology with a battery life that typically
lasts a year and a half.

### Entry Sensor

<img src="./_assets/attachments/$file/media/image4.png"
style="width:1.91803in;height:1.47398in"
alt="A white rectangular object with a button Description automatically generated" />Our
Entry Sensors are placed near doorways & utilize proximity sensors to
measure when there has been an entry into a room. When a hand hygiene
event has not been recorded within an allotted time frame, the Entry
Sensor will provide a gentle, audible reminder to perform Hand Hygiene.
The Entry Sensor is battery operated.

### Hygiene Sensor

Our is Our Hygiene Sensors mount to the side of existing soap or alcohol
dispensers. A sensor inside the device monitors for movement within each
dispenser. When product is fully dispensed from the dispenser a hand
hygiene event is recorded. The Hygiene Sensor is battery operated.

### Location Hub

<img src="./_assets/attachments/$file/media/image5.png"
style="width:0.95082in;height:1.75486in"
alt="A close-up of a white plug Description automatically generated" />Location
Hubs are placed around the hospital in each patient area *(As well as
some non-patient areas)*. These devices continuously listen for the
signals from Caregiver Badge Reels. Using these signals, Location Hubs
can determine position of clinicians as they move through the facility.
With this information, SwipeSense can determine where Hand Hygiene
Opportunities occurred. Location Hubs must be plugged into the wall with
an uninterrupted power source. Please do not unplug. Essential for
patient safety.

### Communication Hub

<img src="./_assets/attachments/$file/media/image6.png"
style="width:1.71896in;height:1.27049in"
alt="A white rectangular object with a light on it Description automatically generated" />Our
Communication Hubs create the SwipeSense network & collect all data that
has been generated at the facility. This data is then relayed back to
SwipeSense cloud servers for processing. Communication Hubs must have an
uninterrupted power and ethernet source. Please do not unplug. Essential
for patient safety.

## System Overview

### How Does a Hand Hygiene Event Get Created?

The Hand Hygiene application is centered around generating Hand Hygiene
Events. We do this by collecting two specific data points. A Hand
Hygiene Opportunity & A Dispense Event. The relationship between these
two data points creates one of two Hand Hygiene Events. Performant or
Non-Performant. The collection and processing of these events leads to
the actionable information displayed on your Care Application Dashboard.

#### Opportunities

SwipeSense **Location Hubs** are strategically placed throughout the
facility to listen for signals generated by **Caregiver Badge Reels**.
Using the signal strength allows SwipeSense to determine whether or not
a clinician is occupying a patient area, and how long it has been since
a clinician entered or exited a patient area. If a clinician has been
found in a patient area for a pre-arranged amount of time *(configured
with your partner success team)*

*P*

then a **Hand Hygiene Opportunity** is assigned to that Clinician.

#### Dispense Events

SwipeSense **Hygiene Sensors** are mounted to the side of each soap or
alcohol dispenser within the facility. These sensors measure for changes
in movement inside each dispenser. When product is fully dispensed then
a **Dispense Event** is recorded for any associated rooms.

Additionally, each dispenser is associated with a room or group of rooms
that it can provide **Dispense Event** credit to.

#### Performant Hand Hygiene Events

When the time of a **Dispense Event** and the time of a **Hand Hygiene
Opportunity** are aligned in our system ***AND*** the dispenser has been
associated with that patient area then a **Performant Hand Hygiene
Event** is granted to the clinician

#### Non-Performant Hand Hygiene Events

When a **Hand Hygiene Opportunity** has been recorded and there is
***NO*** corresponding **Dispense Event** at any associated dispenser
within the preconfigured time frame. Then only the **Hand Hygiene
Opportunity** will be assigned to the clinician. This is considered a
**Non-Performant Hand Hygiene Event**

#### Real Time Voice Reminder

You will hear the SwipeSense voice prompt *only* if you enter or exit a
room without performing Hand Hygiene. This is just meant to serve as a
gentle reminder. When you hear the voice you still have a chance to soap
or sanitize and receive credit for hand hygiene performance. The only
way you will not receive credit is if there is still no hand hygiene
performance after hearing the voice reminder.

#### Why Am I Not Hearing the Voice?

There are certain situations in which The Voice may not play after
entering or exiting a patient area. Here are some reasons why you may
not hear The Voice:

-   The patient room is set to Silent Mode within the Hub App.

-   A piece of hardware in the room is disconnected.

-   Multiple people have entered the room and more than one badge has
    been detected. Our system will automatically silence to prevent
    alarm overload in instances of a code or other emergencies.

-   Your facility has worked with our partner success team to customize
    aspects of The Voice reminder.

If none of these items match your situation, please feel free to reach
out to our SwipeSense Support Team for further information.

### The Care Application

The SwipeSense Care Application contains all the performance insights
generated within your facility. Depending on permissions assigned, you
can view the Hand Hygiene Dashboards for your

-   Hospital Network

-   Facility

-   Groups

-   Units

-   Staff

These dashboards are available 24/7 and can be found by navigating to
the website [care.swipesense.com](http://care.swipesense.com/).
*Permissions for the application are based on direction and requests
from hospital leadership. Access can be customized.*

For more information about The Care Application, please take a look at
our Care Application User Guide.

### The Hub Application

<span class="mark">The SwipeSense Hub Application provides access to all
administrative tools necessary to maintain the SwipeSense system.</span>
Depending on permissions assigned, you can:

-   Perform User Administration

-   Perform Device Maintenance

-   Change Room Modes

This administrative tool is available 24/7 and can be found by
navigating to the website
[hub.swipesense.com](http://hub.swipesense.com/). *Permissions for the
application are based on direction and requests from hospital
leadership. Access can be customized.*

## How To Guides 

These guides are intended to provide a starting point for accessing and
using the SwipeSense Hub Application. For assistance and documentation
surrounding our Care Application please refer to the SwipeSense Care
Application User Guide.

### Activating Access

When SwipeSense support provides you with the appropriate access, you
will get an activation email to setup your first password. From there,
you can use your email and password to log in.

When you login to the application at
[hub.swipesense.com](http://hub.swipesense.com/), you will be directed
to the **Hub Application landing page**. Here you will see all available
options for navigation and administration. Navigating the Hub
Application can be completed from the left side navigation bar or the
central panel. The central panel provides quick links represented by
large purple buttons broken into two categories:

#### Modules

Here you will find all SwipeSense Modules that you currently have
permissions to use. Clicking on any of these will redirect you to the
SwipeSense Care Application.

#### Actions

Here you will find all available actions for administration of the
SwipeSense Platform.

### User Consideration

SwipeSense recommends that any staff members who are regularly
interacting with patients in monitored areas should be badged for hand
hygiene monitoring.

SwipeSense partners with WorkOS to offer an Employee Directory
Synchronization. Before performing any manual user management, please
confirm with the SwipeSense team whether your hospital is set up with
this integration. If so, there will be no need for manual management of
users lists, all users will come over automatically.
<span class="mark"></span>

### Manual User Management 

*Nav Bar: “Actions” -&gt; “User Administration”*

If there are no active integrations then SwipeSense will preload a user
list at time of installation. Over time, new users may need to be
created or deleted if they no longer need to be monitored.

N

-   Adding a New User:

    -   On the Upper Right Corner of the User Administration Panel,
        click on the ‘+’ icon to navigate to the “Create User” page.

        -   Required Fields: First Name, Last Name, Email Address, Group

        -   Badge Required: SwipeSense assumes that anyone entered into
            the system should be monitored for hand hygiene. If this is
            not preferred, you may select “No” and the user will not
            impact data.

        -   Weeks Until Badge Unseen: SwipeSense assumes anyone that is
            badged is full-time and will, at the least, generate data
            within the last 2 weeks by default. This can be adjusted for
            PRN/part time staff, up to 6 weeks.

    -   Click on “Submit” on the bottom right corner of the panel to
        save the user.

-   Editing/Deleting a User:

    -   From the “User Administration” page, click on the user you would
        like to maintain.

        -   You can update any information for that user here.

        -   If it is no longer necessary to monitor this user, you can
            delete them by clicking “Delete Provider” on the bottom left
            corner.

            -   *<span class="mark">What are the ramifications
                of</span>* *<span class="mark">delete? Should we warn
                here that delete means gone? Is there a warning label on
                the website?</span>*

### Assigning Badge Reels

*Quick Link: “Assign Badge”*

*Nav Bar: “Actions” -&gt; “Manage Badges” -&gt; “Assign Provider
Badges”*

-   On this page you can assign a badge to a user. If you would like to
    narrow down your search you can use the “Filter Panel” at the top of
    the page. Expand this panel by selecting the funnel button **ATTACH
    PICTURE** or the arrows on either side of the panel. Expanding will
    allow you to filter your search by:

1.  Facility

2.  Units

3.  All Providers or Unbadged Providers

> *\*Note: Access to these filters is dependent upon permissions
> determined by your hospital.*

-   Once you have the results filtered to your preference, you can
    assign a badge to a user. You will need to have the 6 digit “short
    code” printed on the back of the physical badge to make this
    assignment.

    1.  Click on the **“Provider”** drop down menu and select the care
        provider you would like to assign a badge to.

    2.  Type in the 6-digit short code in the field labeled **“Badge
        Short Code”.**

    3.  When you are comfortable the information has been input
        correctly, click the **“Submit”** button in the bottom
        right-hand corner.

### Managing Badges

*Navigation Bar: Actions -&gt; Manage Badges -&gt; Unit/Group Badge
Maintenance*

*Low*

To ensure that everyone has a functional badge, SwipeSense has provided
some additional tools on our badge maintenance page.

1.  **Remind Provider:** If a provider has not been detected in over 2
    weeks click on the “Remind” button to send an email reminding the
    provider to wear their badge.

2.  **Replace Badge:** If the provider has been wearing their badge, but
    still isn’t being detected, click the ‘Replace’ button to enter a
    new badge and report the old badge as broken.

3.  **Mark Provider On Leave:** If a provider will be on leave for an
    extended period of time, click the ‘On Leave’ button and this will
    remove them from the maintenance list.

4.  **Unassigned Badge:** In some instances, a badge may show as
    ‘Unassigned’. This is typically an indication that someone has been
    physically wearing a badge before it has been assigned to them in
    the system. To remedy this, you can click on the row to see more
    information about where the badge was detected and help locate the
    provider. Once located, you can assign that badge to a provider by
    clicking the “Assign to Provider” button.

5.  **Low Battery Badges:** When badge batteries are near the end of
    their lifespan, they will appear on this page. Here you will be able
    to assign a new badge to the provider.

*<span class="mark">\*Flag to chat in a working session. Add a picture
key to go here with the badges.</span>*

### BUsing the Group/Vital Signs Dashboard

*Quick Link: “Unit Vital Signs”,“Group Vital Signs”*

*Nav Bar: “Reports” -&gt; “Group/Unit Vital Signs Dashboard”*

The Vital Signs Dashboard provides a snapshot of how the system is
performing for your group or unit. There are four components to this
report:

1.  **Provider Engagement:** Insight into who has been utilizing the
    system. Here you can view which groups have accessed emailed
    reports, quantify login frequency, and view long term trends in
    provider engagement.

2.  **Provider Badges:** Visualize the percentage of providers that have
    been assigned badges vs. how many have been detected.
    <span class="mark">Can be used to identify those without badges or
    non-detected badges.</span>

> ***\*Note:** Clicking “Take Action, Go to Badge Maintenance” will
> redirect you to the Badge Maintenance Page to address any badges that
> need attention.*

1.  **System (Unit View Only):** Provides information on rooms that are
    currently reporting data, how many rooms are utilizing the Voice,
    how many rooms may have offline equipment that needs remediation.

2.  **Battery Change List (Unit View Only):** Shows progress of battery
    change needs.

> **\**Note: ****Clicking “Take Action: Go To Sensor Problems” or “Take
> Action: Go to Battery Report” will take you to the corresponding page
> to address any devices needing attention.*

**<span class="mark">INCLUDE PICTURES</span>**

### Using the Real-Time Intervention Blueprint

*Navigation Bar: Reports -&gt; Real Time Intervention Blueprint*

The SwipeSense system provides a Real Time Intervention Blueprint that
alerts unit leaders to problem areas as they occur. This report will
show you shift’s hand hygiene performance by room. Each room that is
recording data will have a shape, each shape represents the number of
opportunities being recorded. Bigger shapes mean more opportunities.
Color represents performance, this color will flip from
<span class="mark">red to green at</span> <span class="mark">50%</span>.
Each shape within a room represents the isolation status of the room.
<img src="./_assets/attachments/$file/media/image7.png"
style="width:6.5in;height:2.09375in"
alt="Diagram Description automatically generated" />

### Contacting Support

For any issues related to the SwipeSense hardware, the Hub application,
or the Care application, please use the “Contact Support” tool within
the Hub or Care applications. You can also contact support by emailing
<support@swipesense.com> with the details of your issue.
