---
title: Developer Home Lab
slug: HomeLab
excerpt: An introduction to homelabs, their motivation, and setup.
imageUrl: 
date: "2026-04-14"
---

I have shared a number of services with friends and colleagues that run from a computer in the corner of my apartment, and a few of you have expressed interest in learning more specifics.
In this article, I'll share what a home lab is, why people are motivated to make one, what they can be used for, and how I set up a mini Kubernetes cluster in my apartment.

## Homelabs
A homelab is a server or computer that developers build at home to host programs or services in their local network or on the internet. They can be very cheap, and be made from an old decommissioned workstation, with just enough power to serve a static web page for well under $100. On the other end, they may have thousands of dollars worth of hardware in them, and be powerful enough to run LLMs, simulations, or train AI.

## Motivations
Many developers have a garden variety of side projects and services deployed. Lets enumerate the benefits of self-hosting on a home lab.
1. Minimal recurring costs.
	- There are many horror stories about cloud bills going geometric, and [saddling people with massive bills](https://www.youtube.com/watch?v=SCIfWhAheVw).
2. Projects serve as a platform to learn industry standard technologies that many developers use on the job.
3. A high degree of control over compute resources.
4. Fun.

Cloud hosting with providers such as Vercel, Google Cloud, and AWS also have suite of benefits:
1. Can be very easy to quickly get a service or website online.
2. Very high reliability / availability.
	- This is why my online portfolio / resume is hosted on GCP. It would be very embarrassing if my apartment had an internet or power outage, and a prospective employer got a 404 when attempting to view my website.
3. Autoscaling. As mentioned above, this can also cause problems.
4. Global availability.

## Exactly What Services Could Be Hosted?
Here's an abridged list of software and services that may pique interest:
- A [VPN](https://tailscale.com/), to allow authenticated connections to tunnel into the local home network from anywhere in the world. 
- A [media streaming service](https://jellyfin.org/): Stream your movies, music and shows from your home server to any device anywhere in the world.
- [Photo storage](https://immich.app/). No need to pay Apple or Google for saving photos to their cloud.
- [File storage](https://nextcloud.com/home-users/). Google Drive / Dropbox leveraging personal hardware.
	- A Brief aside: a 14 TB HDD from [serverpartdeals](https://serverpartdeals.com/) might cost $200, whereas 15 TB of cloud storage from Dropbox will cost ~$900 every year until the data is deleted or moved.
In short, most anything that runs on a computer can also be ran in a personal home lab. There are a huge number of open source projects that copy the functionality basically all paid services.

## Getting Started
Getting a home lab set up can be broadly be broken up into two major steps.
First, a suitable computer needs to be bought. Depending on the motivations driving the commissioning of a home lab, different hardware should be considered. The machine would then be wiped, and an appropriate Linux distribution installed. Second, the cluster and its services are to be deployed. This involves installing K3s, and deciding on how to handle ingress. Articles on these two topics to be published in the future.
