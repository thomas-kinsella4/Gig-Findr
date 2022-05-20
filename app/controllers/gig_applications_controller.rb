class GigApplicationsController < ApplicationController
    before_action :find_gig_app, only: [:show]
    def create
        gig_app = GigApplication.create!(gig_app_params)
        render json: gig_app, status: :created
    end

    # def show
    #     render json: @gig_app, status: :ok
    # end

    private

    def gig_app_params
        params.permit(:gig_id, :artist_id, :isApproved)
    end

end
