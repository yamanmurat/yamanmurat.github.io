# Computational Biochemist Personal Website

This repository contains a personal website template designed for a computational biochemist specializing in glycan research. The website includes sections for About, Research, Publications, CV/Resume, Blog, and Contact information.

## Website Structure

- `index.html` - Main HTML file containing the website structure
- `css/styles.css` - CSS styling for the website
- `js/main.js` - JavaScript functionality
- `images/` - Directory containing images used in the website
  - `glycan-structure.png` - Visualization of a glycan structure
  - `glycan-bg.png` - Background pattern with molecular structures

## Deployment to GitHub Pages

### Step 1: Create a GitHub Repository

1. Sign in to your GitHub account
2. Click the "+" icon in the top right corner and select "New repository"
3. Name your repository `username.github.io` (replace "username" with your actual GitHub username)
4. Make the repository public
5. Click "Create repository"

### Step 2: Upload Your Website Files

#### Option 1: Using GitHub Web Interface

1. Navigate to your new repository
2. Click "Add file" > "Upload files"
3. Drag and drop all the files and folders from your website directory
4. Add a commit message (e.g., "Initial website upload")
5. Click "Commit changes"

#### Option 2: Using Git Command Line

1. Open a terminal/command prompt
2. Navigate to your website directory
3. Initialize a Git repository and push your files:

```bash
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" > "Pages" (in the left sidebar)
3. Under "Source", select "Deploy from a branch"
4. Under "Branch", select "main" and "/(root)" folder
5. Click "Save"
6. Wait a few minutes for GitHub to build and deploy your site
7. Your website will be available at `https://username.github.io`

## Customizing Your Website

### Personal Information

1. Edit `index.html` to replace placeholder text with your information:
   - Update your name in the header and footer
   - Modify the About section with your bio
   - Update the Research Focus section with your specific areas
   - Replace sample publications with your actual publications
   - Update CV/Resume with your education, experience, and skills
   - Customize blog posts with your own content

2. Replace placeholder images:
   - Add your photo to the images directory
   - Update any scientific visualizations with your own

### Styling

1. Modify `css/styles.css` to change colors, fonts, or layout:
   - Primary color variables are defined at the top of the file
   - Section-specific styling is organized by section name

### Adding Content

1. To add new blog posts:
   - Copy an existing blog post structure in the HTML
   - Update the title, date, and content
   - Add any new images to the images directory

2. To add new publications:
   - Copy an existing publication structure
   - Update with your new publication details

## Maintenance

### Regular Updates

1. To update your website after initial deployment:
   - Make changes to your local files
   - Commit and push changes to GitHub:

```bash
git add .
git commit -m "Description of changes"
git push origin main
```

2. GitHub Pages will automatically rebuild and deploy your site

### Adding Custom Domain (Optional)

1. Purchase a domain name from a domain registrar
2. In your repository settings under "Pages":
   - Enter your custom domain in the "Custom domain" field
   - Click "Save"
3. Configure your domain registrar's DNS settings:
   - Add a CNAME record pointing to `username.github.io`
   - Or add A records pointing to GitHub Pages IP addresses

## Support

For questions about GitHub Pages, refer to the [official documentation](https://docs.github.com/en/pages).

For issues with the website template, please check the HTML, CSS, and JavaScript files for comments and documentation.
