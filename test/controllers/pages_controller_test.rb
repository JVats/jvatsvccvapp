require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get education" do
    get :education
    assert_response :success
  end

  test "should get work" do
    get :work
    assert_response :success
  end

  test "should get language" do
    get :language
    assert_response :success
  end

  test "should get additional" do
    get :additional
    assert_response :success
  end

  test "should get personal" do
    get :personal
    assert_response :success
  end

  test "should get computer" do
    get :computer
    assert_response :success
  end

  test "should get refresher" do
    get :refresher
    assert_response :success
  end

end
