class GigsController < ApplicationController

    before_action :find_gig, only: [:show, :update, :destroy]

    def index
        render json: Gig.all, status: :ok
    end

    def show
        render json: @gig, status: :ok
    end

    def update
        @gig.update(gig_params)
        render json: @gig, status: :accepted
    end

    def create
        gig = Gig.create!(gig_params)
        render json: gig, status: :created
    end

    def destroy
        @gig.destroy
        render json: {}, status: :no_content 
    end

    # def artist_gigs
    #     artistGig = Gig.find
    # end

    private 

    def find_gig
        @gig = Gig.find(params[:id])
    end

    def gig_params
        params.permit(:venue, :date, :time, :timetwo, :genres, :description, :agent_id)
    end

end
