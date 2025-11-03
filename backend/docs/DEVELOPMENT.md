# Development

## Active Admin
Create an ActiveAdmin resource file for your model. For example, to register the `SlotBooking` model, run:

```
./bin/rails generate active_admin:resource SlotBooking
```

## Database
- To generate a model called `AreaConfig`:
```bash
./bin/rails g model AreaConfig area:references name:string config:json
```

- To create a migration script to add a column called `company_scooter_number` to a model called `SlotBooking`:
```bash
./bin/rails generate migration AddCompanyScooterNumberToSlotBookings company_scooter_number:string
```

- To run a migration:
```bash
./bin/rails db:migrate
```

- To undo the last migration that was run, use the `rollback` command:
```bash
./bin/rails db:rollback
```

- To drop the database:
RAILS_ENV=test ./bin/rails db:drop

- To create the database:
```bash
RAILS_ENV=test ./bin/rails db:create
```

- To load the schema from `schema.rb`:
```bash
RAILS_ENV=test ./bin/rails schema:load
```

- Create a rake task:
```bash
./bin/rails generate task drivers set_default_password
```

- Run the task:
```bash
./bin/rails drivers:set_default_password
```

## Email
- Generating a mailer:
```bash
./bin/rails generate mailer NotificationMailer admin_notification_email
```
- Preview all emails at http://localhost:3000/rails/mailers/notification_mailer


## Testing
Right now, there are issues when tests run in parallel as a result use the following command to run tests in a single thread:

```
PARALLEL_WORKERS=1 bin/rails test
```

## Active Admin
- To generate a resource for a model:
```bash
```
