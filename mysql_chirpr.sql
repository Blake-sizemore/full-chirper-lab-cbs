drop schema full_chirpr;
create schema full_chirpr;
use full_chirpr;

drop table users;
create table users (
id int auto_increment primary key,
handle varchar(50) unique not null,
email varchar(50) unique not null,
created_at datetime default current_timestamp
);

drop table chirps;
create table chirps (
id int auto_increment primary key,
user_id int,
message varchar(50) not null,
city varchar(50),
created_at datetime default current_timestamp,
CONSTRAINT fk_users foreign key (user_id) references users (id) ON DELETE CASCADE
);

drop table mentions;
create table mentions (
chirp_id int,
user_id int,
primary key (chirp_id,user_id),
CONSTRAINT fk_chirp foreign key (chirp_id) references chirps (id) on delete cascade,
CONSTRAINT fk_user foreign key (user_id) references users (id) on delete cascade
);

delete from chirps where id=1;

-- sample input value  --
insert into users (handle,email) values 
('sampleUser1', 'sampleSet@gmail.com'),
('sampleUser2', 'sampleSet2@gmail.com');

insert into chirps (message,city,user_id) values 
('sample Set chirp 1 @sampleUser2', 'atlanta',1),
('sample Set chirp 2 @sampleUser1', 'atlanta',2);

insert into mentions (chirp_id,user_id) values 
(1,2),
(2,1);

Select * from users;
Select * from chirps;
Select * from mentions;

update chirps set message = 'mysqltest' where id = 6;

create user 'sample_user'@'localhost' identified by 'pswd_sample';
grant all privileges on full_chirpr.* to 'sample_user'@'localhost'; 