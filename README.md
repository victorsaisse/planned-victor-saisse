# **Plamory - Memory Management Application**

## **Overview**

Plamory is a Next.js application designed for managing and organizing personal memories with AI integration. Built with TypeScript, Tailwind CSS, Shadcn, and Supabase, it offers a comprehensive platform for users to store, search, and interact with their memories.

## **Tech Stack**

- **Framework:** Next.js 14.2.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **State Management:** Zustand
- **UI Components:** Radix UI
- **Authentication:** Supabase Auth
- **Search:** Fuse.js
- **Animations:** Motion
- **UI Enhancements:** Shadcn

## **Project Structure**

- **app/**: Next.js app directory
  - **demo/**: Demo page
  - **my-memories/**: User memories page
  - **layout.tsx**: Root layout
- **components/**: Reusable components
  - **ai/**: AI chat components
  - **feed/**: Memory feed components
  - **global/**: Global components
  - **nav/**: Navigation components
  - **profile/**: Profile components
  - **ui/**: UI components
- **hooks/**: Custom React hooks
- **lib/**: Utilities and types
- **public/**: Static assets
- **store/**: Zustand stores
- **styles/**: Global styles
- **utils/**: Helper functions

## **Key Features**

### 1. Authentication

- Google OAuth integration
- Secure session management
- Demo mode support

### 2. Memory Management

**Memory Type Structure**

```typescript
type MemoryType = {
  userId: string;
  id: string;
  imageUrl: string;
  title: string;
  description: string;
  createdAt: string;
  location: string;
};
```

### 3. AI Integration

- Chat interface for help and insights in memories

### 4. Performance Optimizations

- Image Optimization
- Client-side Search
- Route-based code splitting
- Persistent caching with Zustand

### 5. UI Enhancements

- **Shadcn Integration:** Shadcn is a utility library that enhances the UI by providing a set of functions for handling common UI tasks, such as color manipulation, typography, and layout calculations. It helps to streamline the development process by simplifying the implementation of complex UI elements and ensuring consistency across the application.

## **Screenshots and Video Demo**

### Screenshots

[Insert screenshot 1 description]
![Screenshot 1](/path/to/screenshot1.png)

[Insert screenshot 2 description]
![Screenshot 2](/path/to/screenshot2.png)

### Video Demo

[Insert video demo description]
[Video Demo Link](/path/to/videoDemo.mp4)

## **Potential Improvements**

- Implement React Query for data fetching
- Add Service Worker for offline support
- Implement virtual scrolling for memory feed
- Add image compression before upload
- Implement proper error boundaries

## **Development Setup**

- Install dependencies: `npm install`
- Set up environment variables:
  - `NEXT_PUBLIC_SUPABASE_URL=your_supabase_url`
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key`
- Run development server: `npm run dev`

## **Build & Deployment**

- `npm run build`
- `npm run start`

## **Testing**

Currently, the project lacks testing. Recommended additions:

- Unit tests with Jest
- Integration tests with Cypress
- E2E tests with Playwright
