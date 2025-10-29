# Backend - Rails 8 API

This is the backend Rails application for the Turbo Rails + React Native starter project. It provides a Turbo-enabled API and web interface that integrates seamlessly with the React Native mobile app.

## Tech Stack

- **Ruby**: 3.4.6
- **Rails**: 8.0.3
- **Database**: PostgreSQL
- **Frontend**: Turbo Rails, Stimulus, Tailwind CSS
- **Authentication**: Devise
- **Background Jobs**: Solid Queue
- **Caching**: Solid Cache
- **WebSockets**: Solid Cable (Action Cable)
- **Asset Pipeline**: Propshaft
- **Deployment**: Kamal

## Prerequisites

- Ruby 3.4.6 (see `.ruby-version`)
- PostgreSQL (version 12 or higher recommended)
- Node.js and Yarn (for asset compilation)
- Docker and Docker Compose (optional, for containerized development)

## Getting Started

### Option 1: Local Development (Without Docker)

1. **Install Ruby dependencies**
   ```bash
   bundle install
   ```

2. **Install JavaScript dependencies**
   ```bash
   yarn install
   ```

3. **Set up the database**
   ```bash
   # Create database
   rails db:create
   
   # Run migrations
   rails db:migrate
   
   # Seed database (optional)
   rails db:seed
   ```

4. **Start the development server**
   ```bash
   # Start Rails server with Tailwind CSS watcher
   bin/dev
   ```

5. **Access the application**
   
   Open your browser and navigate to: `http://localhost:3000`

### Option 2: Development with Docker (Devcontainer)

This project includes a devcontainer configuration for containerized development.

1. **Install devcontainer CLI**
   ```bash
   npm install -g @devcontainers/cli
   ```

2. **Build the devcontainer**
   ```bash
   devcontainer up --workspace-folder .
   ```

3. **Enter the container**
   ```bash
   devcontainer exec --workspace-folder . bash
   ```

4. **Set up database and start server**
   ```bash
   # Inside the container
   rails db:create db:migrate
   bin/dev
   ```

5. **Access the application**
   
   The app will be running at: `http://localhost:3000`

## Configuration

### Environment Variables

Create a `.env` file in the backend directory if you need custom environment variables:

```bash
DATABASE_URL=postgresql://user:password@localhost/turbo_rails_dev
RAILS_ENV=development
```

### Database Configuration

Database settings are configured in `config/database.yml`. By default, it uses PostgreSQL with the following connection:
- Development: `turbo_rails_development`
- Test: `turbo_rails_test`
- Production: Uses DATABASE_URL environment variable

## Testing

Run the test suite:

```bash
# Run all tests
rails test

# Run specific test file
rails test test/models/user_test.rb

# Run with coverage
rails test:coverage
```

## Key Features

### Turbo Rails Integration
- Turbo Frames for partial page updates
- Turbo Streams for real-time updates
- Turbo Native compatible endpoints for mobile app

### Authentication
- User authentication via Devise
- API endpoints secured with authentication
- Session management for web and mobile

### Modern Rails 8 Infrastructure
- **Solid Queue**: Background job processing
- **Solid Cache**: Fast caching layer
- **Solid Cable**: WebSocket support for real-time features

## Development Commands

```bash
# Start development server with all processes
bin/dev

# Rails console
rails console

# Database migrations
rails db:migrate
rails db:rollback

# Generate new resources
rails generate model Post title:string body:text
rails generate controller Posts

# Check routes
rails routes

# Code linting
rubocop

# Fix linting issues automatically
rubocop -A
```

## Deployment

This project uses Kamal for deployment. See `config/deploy.yml` for deployment configuration.

```bash
# Setup deployment
kamal setup

# Deploy application
kamal deploy

# Check app status
kamal app status
```

## Useful Resources

- [Rails Guides](https://guides.rubyonrails.org/)
- [Turbo Rails Documentation](https://turbo.hotwired.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Devise Documentation](https://github.com/heartcombo/devise)

## Troubleshooting

### Database Connection Issues
If you encounter database connection errors:
```bash
# Check PostgreSQL is running
pg_isready

# Restart PostgreSQL (macOS with Homebrew)
brew services restart postgresql
```

### Asset Compilation Issues
```bash
# Clear assets cache
rails assets:clobber

# Precompile assets
rails assets:precompile
```

## Need Help?

Refer to the main project [README](../README.md) for general information and links to mobile app documentation.

