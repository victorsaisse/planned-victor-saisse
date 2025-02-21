# Plamory - AI-Powered Memory Management

![Plamory Demo Banner](/public/about/screenshot-1.png)

## 🌟 Overview

Plamory is a **Next.js** application designed to help users manage and organize personal memories with **AI integration**. Built with **TypeScript**, **Tailwind CSS**, **Shadcn**, and **Supabase**, it provides a seamless platform to store, search, and interact with memories in a visually appealing and secure way.

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14.2.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **State Management:** Zustand
- **UI Components:** Radix UI + Shadcn
- **Authentication:** Supabase Auth (Google OAuth)
- **Search:** Fuse.js (client-side search)
- **Animations:** Motion (Framer Motion)

---

## 🗂️ Project Structure

```plaintext
app/                  # Next.js app directory
  demo/               # Demo page
  my-memories/        # User memories page
  layout.tsx          # Root layout
components/           # Reusable components
  ai/                 # AI chat components
  feed/               # Memory feed components
  global/             # Global components
  nav/                # Navigation components
  profile/            # Profile components
  ui/                 # UI components
hooks/                # Custom React hooks
lib/                  # Utilities and types
public/               # Static assets
store/                # Zustand stores
styles/               # Global styles
utils/                # Helper functions
```

---

## ✨ Key Features

### 1. **Authentication**

- Google OAuth integration
- Secure session management
- Demo mode for zero-commitment trial

### 2. **Memory Management**

- Store memories with titles, descriptions, locations, and images
- AI-powered search and insights

### 3. **AI Integration**

- Chat interface for memory insights and help

### 4. **Performance Optimizations**

- Image optimization
- Client-side search with Fuse.js
- Route-based code splitting

---

## 🖼️ Screenshots & Demo

### Feed Page

![Screenshot 1](/public/about/screenshot-1.png)

### New Memory Dialog

![Screenshot 2](/public/about/screenshot-2.png)

### Video Demo 📹 (Click to watch)

[Watch Demo](https://tuogqtvpasmyytgswncm.supabase.co/storage/v1/object/public/plamory/public/video/demo.mp4)

---

## 🚀 Local Development Setup

### Prerequisites

- Node.js 18+
- npm 9+
- Supabase account
- OpenAI API key

### Quick Start

```bash
git clone https://github.com/victorsaisse/plamory.git
cd plamory
npm install
cp .env.example .env.local
```

### Environment Variables

```ini
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
OPENAI_API_KEY=your_openai_key
```

---

## 🗄️ Supabase Configuration

### Database Schema

1. Create `memories` table:

```sql
create table memories (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users not null,
  title text not null,
  description text,
  image_url text,
  location text,
  created_at timestamp with time zone default now()
);
```

2. Enable Row Level Security:

```sql
alter table memories enable row level security;

create policy "User can manage their memories"
on memories for all
using (auth.uid() = user_id);
```

### Storage Setup

1. Create `plamory` bucket
2. Set permissions for image uploads and access

---

## 🚀 Vercel Deployment

1. Connect your GitHub repository
2. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `OPENAI_API_KEY`
3. Set build command: `npm run build`
4. Deploy!

---

## 🔮 Potential Improvements

- Implement **React Query** for data fetching
- Add **virtual scrolling** for memory feed
- Add **image compression** before upload
- Implement proper **error boundaries**

---

## 📬 Feedback Welcome!

This project reflects my approach to building production-ready applications. I’d love to discuss:

- Alternative state management strategies
- Performance optimization opportunities
- Enhanced security considerations

---

_"Good software, like wine, takes time and careful crafting."_ 🍷
