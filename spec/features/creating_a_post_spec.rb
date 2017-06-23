require 'rails_helper'

RSpec.feature "Creating a post" do 

	before(:all) do 
		Capybara.current_driver = :selenium
	end

	before do 
		@user = User.create(email:"email@gmail.com", password: "password")
	end


	scenario "A valid user creates a post", js: true do
		visit '/'
		click_link 'Login'
		fill_in "Email", with: "email@gmail.com"
		fill_in "Password", with: "password"
		click_button "Log in"
		sleep 5
		click_button "New Post"
		expect(page).to have_content('Create a Post')
	end

	after(:all) do 
		Capybara.use_default_driver
	end
	
end 