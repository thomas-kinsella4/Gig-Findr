class GigApplicationsController < ApplicationController
    before_action :find_gig_app, only: [:show, :update]
    def create
        gig_app = GigApplication.create!(gig_app_params)
        render json: gig_app, status: :created
    end

    def update
        @gig_app.update(gig_app_params)
        render json: @gig_app, status: :ok
    end


    def index
        render json: GigApplication.all, status: :ok
    end

    def show
        render json: @gig_app, status: :ok
    end

    private

    def find_gig_app
        @gig_app = GigApplication.find(params[:id])
    end

    def gig_app_params
        params.permit(:gig_id, :artist_id, :isApproved)
    end

end
